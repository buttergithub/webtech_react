//package com.auca.onlineQuizApp.controller;
//
//import com.auca.onlineQuizApp.model.Student;
//import com.auca.onlineQuizApp.service.StudentService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//
//@RestController
//@RequestMapping("/api/students")
//public class StudentController {
//    @Autowired
//    private StudentService studentService;
//
//    @PostMapping
//    public ResponseEntity<Student> createStudent(@RequestBody Student student) {
//        return ResponseEntity.ok(studentService.createStudent(student));
//    }
//
//    @GetMapping("/user/{userId}")
//    public ResponseEntity<Student> getStudentByUserId(@PathVariable Long userId) {
//        return ResponseEntity.ok(studentService.getStudentByUserId(userId));
//    }
//
//    @GetMapping("/major/{major}")
//    public ResponseEntity<List<Student>> getStudentsByMajor(@PathVariable String major) {
//        return ResponseEntity.ok(studentService.getStudentsByMajor(major));
//    }
//}
//
