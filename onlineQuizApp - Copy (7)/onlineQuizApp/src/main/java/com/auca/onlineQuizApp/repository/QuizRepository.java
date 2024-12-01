//package com.auca.onlineQuizApp.repository;
//
//import com.auca.onlineQuizApp.model.Quiz;
//import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.stereotype.Repository;
//
//import java.time.LocalDateTime;
//import java.util.List;
//
//@Repository
//public interface QuizRepository extends JpaRepository<Quiz, Long> {
//    List<Quiz> findByTeacherId(Long teacherId);
//    List<Quiz> findByIsActiveTrue();
//    List<Quiz> findByStartTimeAfter(LocalDateTime date);
//}
