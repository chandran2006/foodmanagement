package com.foodbridge.controller;

import com.foodbridge.entity.FoodRequest;
import com.foodbridge.service.FoodRequestService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/requests")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class FoodRequestController {
    
    private final FoodRequestService foodRequestService;
    
    @PostMapping
    public ResponseEntity<FoodRequest> requestFood(@RequestBody FoodRequest request) {
        return ResponseEntity.ok(foodRequestService.requestFood(request));
    }
    
    @GetMapping("/ngo/{ngoId}")
    public ResponseEntity<List<FoodRequest>> getRequestsByNgo(@PathVariable Long ngoId) {
        return ResponseEntity.ok(foodRequestService.getRequestsByNgo(ngoId));
    }
}
