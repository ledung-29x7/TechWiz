package com.rapidrescue.rapid_rescue.controllers;

import com.rapidrescue.rapid_rescue.model.MedicalRecord;
import com.rapidrescue.rapid_rescue.model.UserRole;
import com.rapidrescue.rapid_rescue.model.Users;
import com.rapidrescue.rapid_rescue.repository.MedicalRecordRepository;
import com.rapidrescue.rapid_rescue.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/users")
public class UserController {

    private final UserService userService;
    private final MedicalRecordRepository medicalRecordRepository;

    @Autowired
    public UserController(UserService userService, MedicalRecordRepository medicalRecordRepository) {
        this.userService = userService;
        this.medicalRecordRepository = medicalRecordRepository;
    }

    @GetMapping
    public ResponseEntity<List<Users>> getAllUsers() {
        List<Users> users = userService.getAllUsers();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Users> getUserById(@PathVariable("id") Long id) {
        Users user = userService.findUserbyID(id);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Users> addUser(@RequestBody Map<String, Object> requestBody) {
        Users user = new Users();
        user.setEmail((String) requestBody.get("email"));
        user.setPassword((String) requestBody.get("password"));
        user.setName((String) requestBody.get("name"));
        user.setPhone((String) requestBody.get("phone"));
        user.setAddress((String) requestBody.get("address"));
        user.setEmergencyContact((String) requestBody.get("emergencyContact"));
        user.setRole(UserRole.valueOf((String) requestBody.get("role")));

        // Thêm createdAt và updatedAt
        user.setCreatedAt(Timestamp.valueOf((String) requestBody.get("createdAt")));
        user.setUpdatedAt(Timestamp.valueOf((String) requestBody.get("updatedAt")));

        // Nếu có medicalRecordId, tìm và gán MedicalRecord
        if (requestBody.containsKey("medicalRecordId")) {
            Long medicalRecordId = ((Number) requestBody.get("medicalRecordId")).longValue();
            MedicalRecord medicalRecord = medicalRecordRepository.findById(medicalRecordId)
                    .orElseThrow(() -> new RuntimeException("MedicalRecord not found with id: " + medicalRecordId));

            medicalRecord.setUser(user);
        }

        Users newUser = userService.AddUsers(user);
        return new ResponseEntity<>(newUser, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Users> updateUser(@PathVariable("id") Long id, @RequestBody Users user) {
        user.setUser_id(id);
        Users updatedUser = userService.EditUsers(user);
        return new ResponseEntity<>(updatedUser, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable("id") Long id) {
        userService.DeleteUser(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
