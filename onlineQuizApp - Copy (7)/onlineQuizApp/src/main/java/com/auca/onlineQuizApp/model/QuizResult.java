//package com.auca.onlineQuizApp.model;
//
//import jakarta.persistence.*;
//
//import java.time.LocalDateTime;
//
//@Entity
//@Table(name = "quiz_results")
//public class QuizResult {
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;
//
//    @ManyToOne
//    @JoinColumn(name = "student_id")
//    private Student student;
//
//    @ManyToOne
//    @JoinColumn(name = "quiz_id")
//    private Quiz quiz;
//
//    private Double score;
//    private LocalDateTime completionDate;
//    private Integer timeSpent; // in minutes
//    private Boolean isPassed;
//
//    // Getters, Setters, and Constructors
//
//
//    public Long getId() {
//        return id;
//    }
//
//    public void setId(Long id) {
//        this.id = id;
//    }
//
//    public Student getStudent() {
//        return student;
//    }
//
//    public void setStudent(Student student) {
//        this.student = student;
//    }
//
//    public Quiz getQuiz() {
//        return quiz;
//    }
//
//    public void setQuiz(Quiz quiz) {
//        this.quiz = quiz;
//    }
//
//    public Double getScore() {
//        return score;
//    }
//
//    public void setScore(Double score) {
//        this.score = score;
//    }
//
//    public LocalDateTime getCompletionDate() {
//        return completionDate;
//    }
//
//    public void setCompletionDate(LocalDateTime completionDate) {
//        this.completionDate = completionDate;
//    }
//
//    public Integer getTimeSpent() {
//        return timeSpent;
//    }
//
//    public void setTimeSpent(Integer timeSpent) {
//        this.timeSpent = timeSpent;
//    }
//
//    public Boolean getPassed() {
//        return isPassed;
//    }
//
//    public void setPassed(Boolean passed) {
//        isPassed = passed;
//    }
//
//    public QuizResult(Long id, Student student, Quiz quiz, Double score, LocalDateTime completionDate, Boolean isPassed, Integer timeSpent) {
//        this.id = id;
//        this.student = student;
//        this.quiz = quiz;
//        this.score = score;
//        this.completionDate = completionDate;
//        this.isPassed = isPassed;
//        this.timeSpent = timeSpent;
//    }
//}
//
