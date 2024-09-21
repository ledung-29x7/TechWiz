package com.rapidrescue.rapid_rescue.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.rapidrescue.rapid_rescue.model.Driver;
import com.rapidrescue.rapid_rescue.model.Location;

import java.util.List;

@Repository
public interface LocationRepository extends JpaRepository<Location, Long> {
    List<Location> findByDriver_DriverId(Long driverId);
    Location findTopByDriver_DriverIdOrderByTimestampDesc(Long driverId);
    List<Location> findByDriverIn(List<Driver> drivers);
}

