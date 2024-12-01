//package com.auca.onlineQuizApp.service;
//
//import com.auca.onlineQuizApp.model.Student;
//import com.auca.onlineQuizApp.repository.StudentRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.util.List;
//
//@Service
//public class StudentService {
//    @Autowired
//    private StudentRepository studentRepository;
//
//    public Student createStudent(Student student) {
//        return studentRepository.save(student);
//    }
//
//    public Student getStudentByUserId(Long userId) {
//        return studentRepository.findByUserId(userId);
//    }
//
//    public List<Student> getStudentsByMajor(String major) {
//        return studentRepository.findByMajor(major);
//    }
//}
//
