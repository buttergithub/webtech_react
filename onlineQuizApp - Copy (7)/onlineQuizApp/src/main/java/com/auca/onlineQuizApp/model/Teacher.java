//package com.auca.onlineQuizApp.model;
//
//import jakarta.persistence.*;
//
//import java.util.List;
//
//@Entity
//@Table(name = "teachers")
//public class Teacher {
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;
//
//    private String specialization;
//    private String department;
//
//    @OneToOne
//    @JoinColumn(name = "user_id")
//    private User user;
//
//    @OneToMany(mappedBy = "teacher", cascade = CascadeType.ALL)
//    private List<Quiz> createdQuizzes;
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
//    public String getSpecialization() {
//        return specialization;
//    }
//
//    public void setSpecialization(String specialization) {
//        this.specialization = specialization;
//    }
//
//    public String getDepartment() {
//        return department;
//    }
//
//    public void setDepartment(String department) {
//        this.department = department;
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
//    public List<Quiz> getCreatedQuizzes() {
//        return createdQuizzes;
//    }
//
//    public void setCreatedQuizzes(List<Quiz> createdQuizzes) {
//        this.createdQuizzes = createdQuizzes;
//    }
//
//    public Teacher(Long id, String specialization, String department, User user, List<Quiz> createdQuizzes) {
//        this.id = id;
//        this.specialization = specialization;
//        this.department = department;
//        this.user = user;
//        this.createdQuizzes = createdQuizzes;
//    }
//}
