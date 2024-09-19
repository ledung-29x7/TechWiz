package com.rapidrescue.rapid_rescue.controllers;

import com.rapidrescue.rapid_rescue.model.Ambulance;
import com.rapidrescue.rapid_rescue.service.AmbulanceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/ambulances")
public class AmbulanceController {

    private final AmbulanceService ambulanceService;

    @Autowired
    public AmbulanceController(AmbulanceService ambulanceService) {
        this.ambulanceService = ambulanceService;
    }

    @GetMapping
    public ResponseEntity<List<Ambulance>> getAllAmbulance() {
        List<Ambulance> ambulances = ambulanceService.getAllAmbulances();
        return new ResponseEntity<>(ambulances, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Ambulance> getAmbulanceById(@PathVariable("id") Long id) {
        Ambulance ambulance = ambulanceService.findAmbulancebyID(id);
        return new ResponseEntity<>(ambulance, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Ambulance> addAmbulance(@RequestBody Ambulance ambulance) {
        Ambulance newAmbulance = ambulanceService.AddAmbulance(ambulance);
        return new ResponseEntity<>(newAmbulance, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Ambulance> updateAmbulance(@PathVariable("id") Long id, @RequestBody Ambulance ambulance) {
        ambulance.setAmbulanceId(id);
        Ambulance updatedAmbulance = ambulanceService.EditAmbulance(ambulance);
        return new ResponseEntity<>(updatedAmbulance, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAmbulance(@PathVariable("id") Long id) {
        ambulanceService.DeleteAmbulance(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
