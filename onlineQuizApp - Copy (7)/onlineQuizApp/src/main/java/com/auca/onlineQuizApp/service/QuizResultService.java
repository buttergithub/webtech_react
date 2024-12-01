//package com.auca.onlineQuizApp.service;
//
//import com.auca.onlineQuizApp.model.QuizResult;
//import com.auca.onlineQuizApp.repository.QuizResultRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.util.List;
//
//@Service
//public class QuizResultService {
//    @Autowired
//    private QuizResultRepository quizResultRepository;
//
//    public QuizResult saveQuizResult(QuizResult result) {
//        return quizResultRepository.save(result);
//    }
//
//    public List<QuizResult> getStudentResults(Long studentId) {
//        return quizResultRepository.findByStudentId(studentId);
//    }
//
//    public List<QuizResult> getQuizResults(Long quizId) {
//        return quizResultRepository.findByQuizId(quizId);
//    }
//}
//
