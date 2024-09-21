package com.rapidrescue.rapid_rescue.model.dto;

public class RideRequest {
    private String pickupLocation;
    private String dropOffLocation;
    private Long driverId; // Thêm trường driverId

    public RideRequest(String pickupLocation, String dropOffLocation, Long driverId) {
        this.pickupLocation = pickupLocation;
        this.dropOffLocation = dropOffLocation;
        this.driverId = driverId; // Khởi tạo driverId
    }

    public String getPickupLocation() {
        return this.pickupLocation;
    }

    public void setPickupLocation(String pickupLocation) {
        this.pickupLocation = pickupLocation;
    }

    public String getDropOffLocation() {
        return this.dropOffLocation;
    }

    public void setDropOffLocation(String dropOffLocation) {
        this.dropOffLocation = dropOffLocation;
    }

    public Long getDriverId() {
        return this.driverId; // Getter cho driverId
    }

    public void setDriverId(Long driverId) {
        this.driverId = driverId; // Setter cho driverId
    }
}
