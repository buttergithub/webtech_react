//package com.auca.onlineQuizApp.controller;
//
//import com.auca.onlineQuizApp.model.Teacher;
//import com.auca.onlineQuizApp.service.TeacherService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//
//@RestController
//@RequestMapping("/api/teachers")
//public class TeacherController {
//    @Autowired
//    private TeacherService teacherService;
//
//    @PostMapping
//    public ResponseEntity<Teacher> createTeacher(@RequestBody Teacher teacher) {
//        return ResponseEntity.ok(teacherService.createTeacher(teacher));
//    }
//
//    @GetMapping("/user/{userId}")
//    public ResponseEntity<Teacher> getTeacherByUserId(@PathVariable Long userId) {
//        return ResponseEntity.ok(teacherService.getTeacherByUserId(userId));
//    }
//
//    @GetMapping("/department/{department}")
//    public ResponseEntity<List<Teacher>> getTeachersByDepartment(@PathVariable String department) {
//        return ResponseEntity.ok(teacherService.getTeachersByDepartment(department));
//    }
//}
//
