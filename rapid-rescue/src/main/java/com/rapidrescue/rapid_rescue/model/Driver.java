package com.rapidrescue.rapid_rescue.model;

import java.sql.Timestamp;

import jakarta.persistence.Column;
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
public class Driver {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long driverId;

    private String name;

    @Column(nullable = false, unique = true)
    private String phone;

    private String license;

    @OneToOne
    @JoinColumn(name = "ambulance_id", nullable = false)
    private Ambulance ambulance;

    private String status;
    private Timestamp createdAt;
    private Timestamp updatedAt;
}