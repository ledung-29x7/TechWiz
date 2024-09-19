package com.rapidrescue.rapid_rescue.service;

import java.util.List;

import com.rapidrescue.rapid_rescue.model.MedicalRecord;

public interface MedicalRecordService {
    List<MedicalRecord> getAllMedicalRecord();

    MedicalRecord AddMedicalRecord(MedicalRecord medicalRecord);

    MedicalRecord findMedicalRecordbyID(Long id);

    MedicalRecord EditMedicalRecord(MedicalRecord medicalRecord);

    void DeleteMedicalRecord(Long id);
}
