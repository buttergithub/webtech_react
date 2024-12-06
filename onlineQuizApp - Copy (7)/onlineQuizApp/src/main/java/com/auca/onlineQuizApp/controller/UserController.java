package com.auca.onlineQuizApp.controller;

import com.auca.onlineQuizApp.model.User;
import com.auca.onlineQuizApp.model.UserDTO;
import com.auca.onlineQuizApp.service.AuditLogService;
//import com.auca.onlineQuizApp.service.QuizService;
import com.auca.onlineQuizApp.service.UserService;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.data.web.SpringDataWebProperties;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import com.auca.onlineQuizApp.service.NotificationService;

@RestController
@CrossOrigin(origins="http://localhost:3000")
@RequestMapping("/api")
@Controller
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private AuditLogService auditLogService;

    @Autowired
    private NotificationService notificationService;

//    @Autowired
//    private QuizService quizService;

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody User user) {
        try {
            userService.registerUser(user);
            return ResponseEntity.ok().body(Map.of("message", "Registration successful"));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(Map.of("message", e.getMessage()));
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody UserDTO loginRequest, HttpSession session) {
        User user = userService.authenticateUser(loginRequest.getUsername(), loginRequest.getPassword());

        if (user == null) {
            auditLogService.logAction("LOGIN_FAILED", loginRequest.getUsername(), "Failed login attempt");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password");
        }

        session.setAttribute("loggedInUser", user);
        auditLogService.logAction("LOGIN_SUCCESS", user.getUsername(), "User logged in successfully");

        Map<String, Object> response = new HashMap<>();
        response.put("role", user.getRole());
        response.put("username", user.getUsername());

        return ResponseEntity.ok(user.getRole());
    }


    @PostMapping("/logout")
    public ResponseEntity<?> logout(HttpSession session) {
        User user = (User) session.getAttribute("loggedInUser");
        if (user != null) {
            auditLogService.logAction("LOGOUT", user.getUsername(), "User logged out");
        }
        session.invalidate();
        return ResponseEntity.ok("Logged out successfully");
    }

    @GetMapping("/users")
    public ResponseEntity<?> getAllUsers(
            @RequestParam(defaultValue = "0") int pageNo,
            @RequestParam(defaultValue = "5") int pageSize,
            @RequestParam(defaultValue = "id") String sortBy) {

        Pageable pageable = PageRequest.of(pageNo, pageSize, Sort.by(sortBy));
        Page<User> userPage = userService.getAllUsers(pageable);

        return ResponseEntity.ok(userPage);
    }

    @GetMapping("/studentDashboard")
    public ResponseEntity<?> getStudentDashboard(HttpSession session) {
        User user = (User) session.getAttribute("loggedInUser");
        if (user == null || !user.getRole().equals("ROLE_USER")) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unauthorized access");
        }

        Map<String, Object> dashboard = new HashMap<>();
        dashboard.put("username", user.getUsername());
//        dashboard.put("availableQuizzes", quizService.getAvailableQuizzes());
//        dashboard.put("recentPerformance", quizService.getStudentPerformance(user.getId()));
//        dashboard.put("notifications", NotificationService.getUnreadNotifications(user.getId()));

        return ResponseEntity.ok(dashboard);
    }

    @GetMapping("/teacherDashboard")
    public ResponseEntity<?> getTeacherDashboard(HttpSession session) {
        User user = (User) session.getAttribute("loggedInUser");
        if (user == null || !user.getRole().equals("ROLE_TEACHER")) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unauthorized access");
        }

        Map<String, Object> dashboard = new HashMap<>();
        dashboard.put("username", user.getUsername());
//        dashboard.put("createdQuizzes", QuizService(user.getId()));
//        dashboard.put("studentPerformances", QuizService.getAllStudentsPerformance());
//        dashboard.put("notifications", NotificationService.getUnreadNotifications(user.getId()));

        return ResponseEntity.ok(dashboard);
    }

    @GetMapping("/notifications/user/unread")
    public ResponseEntity<?> getUnreadNotifications(HttpSession session) {
        User user = (User) session.getAttribute("loggedInUser");
        if (user == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("User not logged in");
        }
        return ResponseEntity.ok(notificationService.getUnreadNotifications(user.getId()));
    }

    @PutMapping("/notifications/user/mark-all-as-read")
    public ResponseEntity<?> markNotificationsAsRead(HttpSession session) {
        User user = (User) session.getAttribute("loggedInUser");
        if (user == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("User not logged in");
        }
        notificationService.markAllAsRead(user.getId());
        return ResponseEntity.ok("All notifications marked as read");
    }
}
