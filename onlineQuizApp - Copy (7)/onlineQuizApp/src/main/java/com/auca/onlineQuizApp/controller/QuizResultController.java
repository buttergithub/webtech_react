//package com.auca.onlineQuizApp.controller;
//
//import com.auca.onlineQuizApp.model.QuizResult;
//import com.auca.onlineQuizApp.service.QuizResultService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//
//@RestController
//@RequestMapping("/api/quiz-results")
//public class QuizResultController {
//    @Autowired
//    private QuizResultService quizResultService;
//
//    @PostMapping
//    public ResponseEntity<QuizResult> saveQuizResult(@RequestBody QuizResult result) {
//        return ResponseEntity.ok(quizResultService.saveQuizResult(result));
//    }
//
//    @GetMapping("/student/{studentId}")
//    public ResponseEntity<List<QuizResult>> getStudentResults(@PathVariable Long studentId) {
//        return ResponseEntity.ok(quizResultService.getStudentResults(studentId));
//    }
//
//    @GetMapping("/quiz/{quizId}")
//    public ResponseEntity<List<QuizResult>> getQuizResults(@PathVariable Long quizId) {
//        return ResponseEntity.ok(quizResultService.getQuizResults(quizId));
//    }
//}
//
