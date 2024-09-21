package com.rapidrescue.rapid_rescue.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.*;

import com.rapidrescue.rapid_rescue.model.Driver;
import com.rapidrescue.rapid_rescue.model.dto.RideRequest;
import com.rapidrescue.rapid_rescue.model.dto.RideAcceptance;
import com.rapidrescue.rapid_rescue.service.DriverService;

@RestController
@RequestMapping("/find-driver")
public class RideController {

    @Autowired
    private DriverService driverService;

    @Autowired
    private SimpMessagingTemplate messagingTemplate;

    @PostMapping
    public ResponseEntity<?> findNearestDrivers(@RequestBody RideRequest request) {
        // Lấy tọa độ người dùng
        String pickupLocation = request.getPickupLocation();

        // Lấy tất cả tài xế từ cơ sở dữ liệu
        List<Driver> allDrivers = driverService.getAllDrivers();

        // Sử dụng Google Distance Matrix API để tính toán khoảng cách
        List<Driver> nearestDrivers = driverService.getNearestDrivers(pickupLocation, allDrivers);

        // Gửi thông báo đến 5 tài xế gần nhất
        for (Driver driver : nearestDrivers) {
            messagingTemplate.convertAndSend("/topic/drivers", new RideRequest(request.getPickupLocation(), request.getDropOffLocation(), driver.getDriverId()));
        }

        return ResponseEntity.ok(nearestDrivers);
    }

    @PostMapping("/accept-ride")
    public ResponseEntity<?> acceptRide(@RequestBody RideAcceptance acceptance) {
        // Xử lý logic gán chuyến đi cho tài xế
        // acceptance.getDriverId() và acceptance.getRideId() sẽ được sử dụng để cập nhật trạng thái chuyến đi trong cơ sở dữ liệu

        // Giả sử có một service để xử lý việc xác nhận chuyến đi
        boolean success = driverService.assignRideToDriver(acceptance.getDriverId(), acceptance.getRideId());

        if (success) {
            return ResponseEntity.ok("Chuyến đi đã được xác nhận.");
        } else {
            return ResponseEntity.status(400).body("Không thể xác nhận chuyến đi.");
        }
    }
}
