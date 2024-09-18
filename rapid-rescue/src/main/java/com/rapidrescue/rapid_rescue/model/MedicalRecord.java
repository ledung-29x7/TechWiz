package com.rapidrescue.rapid_rescue.model;

import java.sql.Timestamp;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class MedicalRecord {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long recordId;

    @OneToOne
    @JoinColumn(name = "user_id", nullable = false)
    private Users user;

    private String medicalHistory;
    private String allergies;
    private String medications;
    private String emergencyContact;
    private Timestamp createdAt;
    private Timestamp updatedAt;
}
