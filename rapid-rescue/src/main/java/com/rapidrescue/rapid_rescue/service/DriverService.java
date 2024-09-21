package com.rapidrescue.rapid_rescue.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.rapidrescue.rapid_rescue.model.Driver;
import com.rapidrescue.rapid_rescue.model.Location;
import com.rapidrescue.rapid_rescue.model.Ride;
import com.rapidrescue.rapid_rescue.model.RideStatus;
import com.rapidrescue.rapid_rescue.repository.DriverRepository;
import com.rapidrescue.rapid_rescue.repository.LocationRepository;
import com.rapidrescue.rapid_rescue.repository.RideRepository;

import java.util.ArrayList;
import java.util.List;

@Service
public class DriverService {

    @Autowired
    private LocationRepository locationRepository;

    @Autowired
    private RideRepository rideRepository;

    @Autowired
    private DriverRepository driverRepository;

    @Value("${google.maps.api.key}")
    private String googleApiKey;

    // Lấy danh sách tài xế từ cơ sở dữ liệu
    public List<Driver> getAllDrivers() {
        return driverRepository.findAll();  // Giả sử có driverRepository để tìm tài xế
    }

    // Tìm 5 tài xế gần nhất dựa trên vị trí của người dùng
    public List<Driver> getNearestDrivers(String userLocation, List<Driver> drivers) {
        // Lấy danh sách vị trí của tài xế
        List<Location> driverLocations = locationRepository.findByDriverIn(drivers);

        // Tạo URL cho Google Distance Matrix API
        String url = "https://maps.googleapis.com/maps/api/distancematrix/json?origins=" + userLocation + "&destinations=";

        for (Location location : driverLocations) {
            // Thêm vị trí của mỗi tài xế vào URL
            url += location.getLatitude() + "," + location.getLongitude() + "|";
        }
        url += "&key=" + googleApiKey;

        // Gửi request đến Google Distance Matrix API
        RestTemplate restTemplate = new RestTemplate();
        String response = restTemplate.getForObject(url, String.class);

        // Xử lý phản hồi và sắp xếp tài xế theo khoảng cách
        return processGoogleApiResponse(response, drivers);
    }

    private List<Driver> processGoogleApiResponse(String jsonResponse, List<Driver> drivers) {
        List<DriverDistance> driverDistances = new ArrayList<>();

        try {
            ObjectMapper mapper = new ObjectMapper();
            JsonNode root = mapper.readTree(jsonResponse);

            // Xử lý dữ liệu từ API
            JsonNode rows = root.path("rows");
            if (rows.isArray()) {
                for (int i = 0; i < rows.size(); i++) {
                    JsonNode elements = rows.get(i).path("elements");
                    if (elements.isArray() && elements.size() > 0) {
                        long distanceInMeters = elements.get(0).path("distance").path("value").asLong();
                        driverDistances.add(new DriverDistance(drivers.get(i), distanceInMeters));
                    }
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }

        // Sắp xếp danh sách tài xế theo khoảng cách tăng dần
        driverDistances.sort((d1, d2) -> Long.compare(d1.getDistanceInMeters(), d2.getDistanceInMeters()));

        // Lấy ra 5 tài xế gần nhất
        List<Driver> nearestDrivers = new ArrayList<>();
        for (int i = 0; i < Math.min(5, driverDistances.size()); i++) {
            nearestDrivers.add(driverDistances.get(i).getDriver());
        }

        return nearestDrivers;
    }

    // Lớp lưu khoảng cách của tài xế
    private static class DriverDistance {
        private final Driver driver;
        private final long distanceInMeters;

        public DriverDistance(Driver driver, long distanceInMeters) {
            this.driver = driver;
            this.distanceInMeters = distanceInMeters;
        }

        public Driver getDriver() {
            return driver;
        }

        public long getDistanceInMeters() {
            return distanceInMeters;
        }
    }

    public boolean assignRideToDriver(Long driverId, Long rideId) {
        // Tìm tài xế theo ID
        Driver driver = driverRepository.findById(driverId).orElse(null);
        if (driver == null) {
            return false; // Tài xế không tồn tại
        }

        // Tìm chuyến đi theo ID
        Ride ride = rideRepository.findById(rideId).orElse(null);
        if (ride == null) {
            return false; // Chuyến đi không tồn tại
        }

        // Gán tài xế cho chuyến đi
        ride.setDriver(driver); // Giả sử bạn có phương thức setDriver trong Ride
        ride.setStatus(RideStatus.ACCEPTED); // Cập nhật trạng thái chuyến đi (có thể thay đổi tùy ý)
        rideRepository.save(ride); // Lưu thay đổi vào cơ sở dữ liệu

        return true; // Gán thành công
    }
    
    
}


