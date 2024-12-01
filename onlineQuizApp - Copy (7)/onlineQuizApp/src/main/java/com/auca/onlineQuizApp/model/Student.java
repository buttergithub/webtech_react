//package com.auca.onlineQuizApp.model;
//
//import jakarta.persistence.*;
//
//import java.util.List;
//
//@Entity
//@Table(name = "students")
//public class Student {
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;
//
//    private String studentId;
//    private String major;
//    private Integer year;
//
//    @OneToOne
//    @JoinColumn(name = "user_id")
//    private User user;
//
//    @OneToMany(mappedBy = "student")
//    private List<QuizResult> quizResults;
//
//    // Getters, Setters, and Constructors
//
//    public Long getId() {
//        return id;
//    }
//
//    public void setId(Long id) {
//        this.id = id;
//    }
//
//    public String getStudentId() {
//        return studentId;
//    }
//
//    public void setStudentId(String studentId) {
//        this.studentId = studentId;
//    }
//
//    public String getMajor() {
//        return major;
//    }
//
//    public void setMajor(String major) {
//        this.major = major;
//    }
//
//    public Integer getYear() {
//        return year;
//    }
//
//    public void setYear(Integer year) {
//        this.year = year;
//    }
//
//    public User getUser() {
//        return user;
//    }
//
//    public void setUser(User user) {
//        this.user = user;
//    }
//
//    public List<QuizResult> getQuizResults() {
//        return quizResults;
//    }
//
//    public void setQuizResults(List<QuizResult> quizResults) {
//        this.quizResults = quizResults;
//    }
//
//    public Student(Long id, String studentId, String major, Integer year, User user, List<QuizResult> quizResults) {
//        this.id = id;
//        this.studentId = studentId;
//        this.major = major;
//        this.year = year;
//        this.user = user;
//        this.quizResults = quizResults;
//    }
//}
//
