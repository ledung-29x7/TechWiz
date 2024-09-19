package com.rapidrescue.rapid_rescue.service;

import java.util.List;

import com.rapidrescue.rapid_rescue.model.Ambulance;

public interface AmbulanceService {
    List<Ambulance> getAllAmbulances();

    Ambulance AddAmbulance(Ambulance ambulance);

    Ambulance findAmbulancebyID(Long id);

    Ambulance EditAmbulance(Ambulance ambulance);

    void DeleteAmbulance(Long id);
}
