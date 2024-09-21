package com.rapidrescue.rapid_rescue.controller;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

import com.rapidrescue.rapid_rescue.model.dto.RideRequest;

@Controller
public class RideWebSocketController {

    @MessageMapping("/send-request")
    @SendTo("/topic/drivers")
    public RideRequest sendRideRequest(RideRequest request) {
        // Gửi yêu cầu đến tài xế
        return request;
    }
}

