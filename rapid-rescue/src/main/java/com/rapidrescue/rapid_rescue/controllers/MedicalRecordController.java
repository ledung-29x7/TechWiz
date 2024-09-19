package com.rapidrescue.rapid_rescue.controllers;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.rapidrescue.rapid_rescue.model.MedicalRecord;
import com.rapidrescue.rapid_rescue.service.MedicalRecordService;

@RestController
@RequestMapping("/records")
public class MedicalRecordController {

    private MedicalRecordService medicalRecordService;

    public MedicalRecordController(MedicalRecordService medicalRecordService) {
        this.medicalRecordService = medicalRecordService;
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
    public ResponseEntity<MedicalRecord> addMedicalRecord(@RequestBody MedicalRecord medicalRecord) {
        MedicalRecord newRecord = medicalRecordService.AddMedicalRecord(medicalRecord);
        return new ResponseEntity<>(newRecord, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<MedicalRecord> editMedicalRecord(@PathVariable Long id,
            @RequestBody MedicalRecord medicalRecord) {
        medicalRecord.setRecordId(id);
        MedicalRecord updatedRecord = medicalRecordService.EditMedicalRecord(medicalRecord);
        return ResponseEntity.ok(updatedRecord);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteMedicalRecord(@PathVariable Long id) {
        medicalRecordService.DeleteMedicalRecord(id);
        return ResponseEntity.noContent().build();
    }
}
