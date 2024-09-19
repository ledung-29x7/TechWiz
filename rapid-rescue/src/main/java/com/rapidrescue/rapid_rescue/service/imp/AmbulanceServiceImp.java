package com.rapidrescue.rapid_rescue.service.imp;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rapidrescue.rapid_rescue.model.Ambulance;
import com.rapidrescue.rapid_rescue.repository.AmbulanceRepository;
import com.rapidrescue.rapid_rescue.service.AmbulanceService;

@Service
public class AmbulanceServiceImp implements AmbulanceService {

    private AmbulanceRepository ambulanceRepository;

    @Autowired
    public AmbulanceServiceImp(AmbulanceRepository ambulanceRepository) {
        this.ambulanceRepository = ambulanceRepository;
    }

    @Override
    public List<Ambulance> getAllAmbulances() {
        return ambulanceRepository.findAll();
    }

    @Override
    public Ambulance AddAmbulance(Ambulance ambulance) {
        return ambulanceRepository.save(ambulance);
    }

    @Override
    public Ambulance findAmbulancebyID(Long id) {
        return ambulanceRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Ambulance not found with id: " + id));

    }

    @Override
    public Ambulance EditAmbulance(Ambulance ambulance) {
        if (!ambulanceRepository.existsById(ambulance.getAmbulanceId())) {
            throw new RuntimeException("Ambulance not found with id: " + ambulance.getAmbulanceId());
        }
        return ambulanceRepository.save(ambulance);
    }

    @Override
    public void DeleteAmbulance(Long id) {
        if (!ambulanceRepository.existsById(id)) {
            throw new RuntimeException("Ambulance not found with id: " + id);
        }
        ambulanceRepository.deleteById(id);
    }

}
