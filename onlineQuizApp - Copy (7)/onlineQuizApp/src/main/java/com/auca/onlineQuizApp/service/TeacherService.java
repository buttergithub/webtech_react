//package com.auca.onlineQuizApp.service;
//
//import com.auca.onlineQuizApp.model.Teacher;
//import com.auca.onlineQuizApp.repository.TeacherRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.util.List;
//
//@Service
//public class TeacherService {
//    @Autowired
//    private TeacherRepository teacherRepository;
//
//    public Teacher createTeacher(Teacher teacher) {
//        return teacherRepository.save(teacher);
//    }
//
//    public Teacher getTeacherByUserId(Long userId) {
//        return teacherRepository.findByUserId(userId);
//    }
//
//    public List<Teacher> getTeachersByDepartment(String department) {
//        return teacherRepository.findByDepartment(department);
//    }
//}
//
