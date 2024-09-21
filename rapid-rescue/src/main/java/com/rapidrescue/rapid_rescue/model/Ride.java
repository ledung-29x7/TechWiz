package com.rapidrescue.rapid_rescue.model;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Entity
@Table(name = "Rides")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Ride {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long rideId;

    @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "userId")
    private User user;

    @ManyToOne
    @JoinColumn(name = "driver_id", referencedColumnName = "driverId")
    private Driver driver;

    @Column(nullable = false)
    private double pickupLatitude;

    @Column(nullable = false)
    private double pickupLongitude;

    @Column(nullable = false)
    private double dropoffLatitude;

    @Column(nullable = false)
    private double dropoffLongitude;

    @Column(nullable = false)
    private LocalDateTime requestedAt;

    @Column(nullable = true)
    private LocalDateTime completedAt;

    @Column(nullable = false)
    private RideStatus status;
}
