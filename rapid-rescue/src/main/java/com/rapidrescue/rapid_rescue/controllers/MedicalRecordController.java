package com.rapidrescue.rapid_rescue.controllers;

import java.sql.Timestamp;
import java.time.OffsetDateTime;
import java.util.List;
import java.util.Map; // Thay đổi từ org.hibernate.mapping.Map thành java.util.Map

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.rapidrescue.rapid_rescue.model.MedicalRecord;
import com.rapidrescue.rapid_rescue.model.Users;
import com.rapidrescue.rapid_rescue.service.MedicalRecordService;
import com.rapidrescue.rapid_rescue.repository.UserRepository; // Import repository

@RestController
@RequestMapping("/records")
public class MedicalRecordController {

    private final MedicalRecordService medicalRecordService;
    private final UserRepository userRepository; // Thêm repository

    public MedicalRecordController(MedicalRecordService medicalRecordService, UserRepository userRepository) {
        this.medicalRecordService = medicalRecordService;
        this.userRepository = userRepository;
    }

    @GetMapping
    public ResponseEntity<List<MedicalRecord>> getAllMedicalRecords() {
        List<MedicalRecord> medicalRecords = medicalRecordService.getAllMedicalRecord();
        return new ResponseEntity<>(medicalRecords, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<MedicalRecord> getMedicalRecordById(@PathVariable Long id) {
        MedicalRecord medicalRecord = medicalRecordService.findMedicalRecordbyID(id);
        return ResponseEntity.ok(medicalRecord);
    }

    @PostMapping
    public ResponseEntity<MedicalRecord> addMedicalRecord(@RequestBody Map<String, Object> requestBody) {
        MedicalRecord medicalRecord = new MedicalRecord();
        medicalRecord.setAllergies((String) requestBody.get("allergies"));
        medicalRecord.setMedications((String) requestBody.get("medications"));

        // Convert ISO datetime to Timestamp
        String createdAtStr = (String) requestBody.get("createdAt");
        String updatedAtStr = (String) requestBody.get("updatedAt");

        OffsetDateTime createdAt = OffsetDateTime.parse(createdAtStr);
        OffsetDateTime updatedAt = OffsetDateTime.parse(updatedAtStr);

        medicalRecord.setCreatedAt(Timestamp.from(createdAt.toInstant()));
        medicalRecord.setUpdatedAt(Timestamp.from(updatedAt.toInstant()));

        Long userId = ((Number) requestBody.get("user_id")).longValue();
        Users user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found with id: " + userId));
        medicalRecord.setUser(user);

        MedicalRecord newMedicalRecord = medicalRecordService.AddMedicalRecord(medicalRecord);
        return new ResponseEntity<>(newMedicalRecord, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<MedicalRecord> editMedicalRecord(@PathVariable Long id,
            @RequestBody Map<String, Object> requestBody) {
        // Tìm MedicalRecord hiện có
        MedicalRecord existingRecord = medicalRecordService.findMedicalRecordbyID(id);

        if (existingRecord == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }

        // Cập nhật thông tin
        if (requestBody.containsKey("allergies")) {
            existingRecord.setAllergies((String) requestBody.get("allergies"));
        }
        if (requestBody.containsKey("medications")) {
            existingRecord.setMedications((String) requestBody.get("medications"));
        }

        // Cập nhật thời gian
        if (requestBody.containsKey("createdAt")) {
            String createdAtStr = (String) requestBody.get("createdAt");
            OffsetDateTime createdAt = OffsetDateTime.parse(createdAtStr);
            existingRecord.setCreatedAt(Timestamp.from(createdAt.toInstant()));
        }
        if (requestBody.containsKey("updatedAt")) {
            String updatedAtStr = (String) requestBody.get("updatedAt");
            OffsetDateTime updatedAt = OffsetDateTime.parse(updatedAtStr);
            existingRecord.setUpdatedAt(Timestamp.from(updatedAt.toInstant()));
        }

        // Cập nhật người dùng nếu có thay đổi
        if (requestBody.containsKey("user_id")) {
            Long userId = ((Number) requestBody.get("user_id")).longValue();
            Users user = userRepository.findById(userId)
                    .orElseThrow(() -> new RuntimeException("User not found with id: " + userId));
            existingRecord.setUser(user);
        }

        // Lưu MedicalRecord đã cập nhật
        MedicalRecord updatedRecord = medicalRecordService.EditMedicalRecord(existingRecord);
        return ResponseEntity.ok(updatedRecord);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteMedicalRecord(@PathVariable Long id) {
        medicalRecordService.DeleteMedicalRecord(id);
        return ResponseEntity.noContent().build();
    }
}
