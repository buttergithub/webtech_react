//package com.auca.onlineQuizApp.model;
//
//import jakarta.persistence.*;
//
//import java.time.LocalDateTime;
//
//
//@Entity
//@Table(name = "quizzes")
//public class Quiz {
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;
//
//    private String title;
//    private String description;
//    private LocalDateTime startTime;
//    private LocalDateTime endTime;
//    private Integer duration; // in minutes
//    private String subject;
//    private Boolean isActive;
//
//    @ManyToOne
//    @JoinColumn(name = "teacher_id")
//    private User teacher;
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
//    public String getTitle() {
//        return title;
//    }
//
//    public void setTitle(String title) {
//        this.title = title;
//    }
//
//    public String getDescription() {
//        return description;
//    }
//
//    public void setDescription(String description) {
//        this.description = description;
//    }
//
//    public LocalDateTime getStartTime() {
//        return startTime;
//    }
//
//    public void setStartTime(LocalDateTime startTime) {
//        this.startTime = startTime;
//    }
//
//    public LocalDateTime getEndTime() {
//        return endTime;
//    }
//
//    public void setEndTime(LocalDateTime endTime) {
//        this.endTime = endTime;
//    }
//
//    public Integer getDuration() {
//        return duration;
//    }
//
//    public void setDuration(Integer duration) {
//        this.duration = duration;
//    }
//
//    public String getSubject() {
//        return subject;
//    }
//
//    public void setSubject(String subject) {
//        this.subject = subject;
//    }
//
//    public Boolean getActive() {
//        return isActive;
//    }
//
//    public void setActive(Boolean active) {
//        isActive = active;
//    }
//
//    public User getTeacher() {
//        return teacher;
//    }
//
//    public void setTeacher(User teacher) {
//        this.teacher = teacher;
//    }
//
//    public Quiz(Long id, String title, String description, LocalDateTime startTime, LocalDateTime endTime, Integer duration, String subject, Boolean isActive, User teacher) {
//        this.id = id;
//        this.title = title;
//        this.description = description;
//        this.startTime = startTime;
//        this.endTime = endTime;
//        this.duration = duration;
//        this.subject = subject;
//        this.isActive = isActive;
//        this.teacher = teacher;
//    }
//}
