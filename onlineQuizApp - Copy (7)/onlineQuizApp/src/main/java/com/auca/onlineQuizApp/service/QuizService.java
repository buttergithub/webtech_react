//package com.auca.onlineQuizApp.service;
//
//import com.auca.onlineQuizApp.model.QuizResult;
//import com.auca.onlineQuizApp.model.Role;
//import com.auca.onlineQuizApp.model.User;
//import com.auca.onlineQuizApp.repository.QuizRepository;
//import com.auca.onlineQuizApp.repository.QuizResultRepository;
//import com.auca.onlineQuizApp.repository.UserRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.util.Comparator;
//import java.util.HashMap;
//import java.util.List;
//import java.util.Map;
//import java.util.stream.Collectors;
//
//@Service
//public class QuizService {
//    @Autowired
//    private NotificationService notificationService;
//    @Autowired
//    private QuizRepository quizRepository;
//
//    @Autowired
//    private QuizResultRepository quizResultRepository;
//
//
//
//    public Map<String, Object> getStudentPerformance(Long studentId) {
//        List<QuizResult> studentResults = quizResultRepository.findByStudentId(studentId);
//
//        Map<String, Object> performance = new HashMap<>();
//
//        // Calculate total quizzes taken
//        int totalQuizzes = studentResults.size();
//
//        // Calculate average score
//        double averageScore = studentResults.stream()
//                .mapToDouble(QuizResult::getScore)
//                .average()
//                .orElse(0.0);
//
//        // Get highest and lowest scores
//        double highestScore = studentResults.stream()
//                .mapToDouble(QuizResult::getScore)
//                .max()
//                .orElse(0.0);
//
//        double lowestScore = studentResults.stream()
//                .mapToDouble(QuizResult::getScore)
//                .min()
//                .orElse(0.0);
//
//        // Calculate recent performance trend
//        List<QuizResult> recentResults = studentResults.stream()
//                .sorted(Comparator.comparing(QuizResult::getCompletionDate).reversed())
//                .limit(5)
//                .collect(Collectors.toList());
//
//        List<Map<String, Object>> recentPerformance = recentResults.stream()
//                .map(result -> {
//                    Map<String, Object> quizData = new HashMap<>();
//                    quizData.put("quizTitle", result.getQuiz().getTitle());
//                    quizData.put("score", result.getScore());
//                    quizData.put("date", result.getCompletionDate());
//                    return quizData;
//                })
//                .collect(Collectors.toList());
//
//        // Compile all performance metrics
//        performance.put("totalQuizzesTaken", totalQuizzes);
//        performance.put("averageScore", averageScore);
//        performance.put("highestScore", highestScore);
//        performance.put("lowestScore", lowestScore);
//        performance.put("recentPerformance", recentPerformance);
//
//        return performance;
//    }
//
//    public List<Map<String, Object>> getAllStudentsPerformance() {
//        List<User> students = UserRepository.findByRole(Role.valueOf("ROLE_USER"));
//
//        return students.stream()
//                .map(student -> {
//                    Map<String, Object> studentPerformance = new HashMap<>();
//                    List<QuizResult> results = quizResultRepository.findByStudentId(student.getId());
//
//                    double averageScore = results.stream()
//                            .mapToDouble(QuizResult::getScore)
//                            .average()
//                            .orElse(0.0);
//
//                    int completedQuizzes = results.size();
//
//                    // Get recent activity
//                    QuizResult lastAttempt = results.stream()
//                            .max(Comparator.comparing(QuizResult::getCompletionDate))
//                            .orElse(null);
//
//                    studentPerformance.put("studentId", student.getId());
//                    studentPerformance.put("studentName", student.getUsername());
//                    studentPerformance.put("averageScore", averageScore);
//                    studentPerformance.put("completedQuizzes", completedQuizzes);
//                    studentPerformance.put("lastAttemptDate",
//                            lastAttempt != null ? lastAttempt.getCompletionDate() : null);
//                    studentPerformance.put("lastQuizScore",
//                            lastAttempt != null ? lastAttempt.getScore() : null);
//
//                    return studentPerformance;
//                })
//                .collect(Collectors.toList());
//    }
//    public Map<String, Object> getStudentDashboard(Long userId) {
//        Map<String, Object> dashboard = new HashMap<>();
//        dashboard.put("notifications", notificationService.getUnreadNotifications(userId));
//        dashboard.put("quizzes", quizRepository.findAll());
//        return dashboard;
//    }
//}
//
