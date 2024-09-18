package com.rapidrescue.rapid_rescue.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.rapidrescue.rapid_rescue.model.Driver;
@Repository
public interface DriverRepository extends JpaRepository<Driver, Long> {
    
}
