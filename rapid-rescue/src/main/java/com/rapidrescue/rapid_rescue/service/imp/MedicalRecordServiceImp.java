package com.rapidrescue.rapid_rescue.service.imp;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rapidrescue.rapid_rescue.model.MedicalRecord;
import com.rapidrescue.rapid_rescue.repository.MedicalRecordRepository;
import com.rapidrescue.rapid_rescue.service.MedicalRecordService;

import jakarta.persistence.EntityNotFoundException;

@Service
public class MedicalRecordServiceImp implements MedicalRecordService {

    private final MedicalRecordRepository medicalRecordRepository;

    @Autowired
    public MedicalRecordServiceImp(MedicalRecordRepository medicalRecordRepository) {
        this.medicalRecordRepository = medicalRecordRepository;
    }

    @Override
    public List<MedicalRecord> getAllMedicalRecord() {
        return medicalRecordRepository.findAll();
    }

    @Override
    public MedicalRecord AddMedicalRecord(MedicalRecord medicalRecord) {
        return medicalRecordRepository.save(medicalRecord);
    }

    @Override
    public MedicalRecord findMedicalRecordbyID(Long id) {
        return medicalRecordRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("MedicalRecord not found with ID: " + id));
    }

    @Override
    public MedicalRecord EditMedicalRecord(MedicalRecord medicalRecord) {
        if (medicalRecord.getRecordId() == null || !medicalRecordRepository.existsById(medicalRecord.getRecordId())) {
            throw new EntityNotFoundException("MedicalRecord not found with ID: " + medicalRecord.getRecordId());
        }
        return medicalRecordRepository.save(medicalRecord);
    }

    @Override
    public void DeleteMedicalRecord(Long id) {
        if (!medicalRecordRepository.existsById(id)) {
            throw new EntityNotFoundException("MedicalRecord not found with ID: " + id);
        }
        medicalRecordRepository.deleteById(id);
    }
}
