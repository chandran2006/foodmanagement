package com.foodbridge.controller;

import com.foodbridge.dto.AnalyticsResponse;
import com.foodbridge.entity.FoodDonation;
import com.foodbridge.entity.User;
import com.foodbridge.repository.FoodDonationRepository;
import com.foodbridge.repository.PickupRepository;
import com.foodbridge.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/admin")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class AdminController {
    
    private final UserRepository userRepository;
    private final FoodDonationRepository foodDonationRepository;
    private final PickupRepository pickupRepository;
    
    @GetMapping("/users")
    public ResponseEntity<List<User>> getAllUsers() {
        return ResponseEntity.ok(userRepository.findAll());
    }
    
    @GetMapping("/donations")
    public ResponseEntity<List<FoodDonation>> getAllDonations() {
        return ResponseEntity.ok(foodDonationRepository.findAll());
    }
    
    @GetMapping("/analytics")
    public ResponseEntity<AnalyticsResponse> getAnalytics() {
        long totalUsers = userRepository.count();
        long totalDonations = foodDonationRepository.count();
        long totalMealsServed = pickupRepository.count();
        long activeNGOs = userRepository.countByRole(User.Role.NGO);
        
        AnalyticsResponse response = new AnalyticsResponse(totalUsers, totalDonations, totalMealsServed, activeNGOs);
        return ResponseEntity.ok(response);
    }
}
