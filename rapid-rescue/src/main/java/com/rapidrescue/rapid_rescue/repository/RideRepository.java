package com.rapidrescue.rapid_rescue.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.rapidrescue.rapid_rescue.model.Ride;
import com.rapidrescue.rapid_rescue.model.RideStatus;

import java.util.List;

@Repository
public interface RideRepository extends JpaRepository<Ride, Long> {
    List<Ride> findByUser_UserId(Long id);
    List<Ride> findByDriver_DriverId(Long id);
    List<Ride> findByStatus(RideStatus status);
}

