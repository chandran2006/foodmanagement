package com.foodbridge.controller;

import com.foodbridge.entity.FoodDonation;
import com.foodbridge.service.FoodDonationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/donations")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class FoodDonationController {
    
    private final FoodDonationService foodDonationService;
    
    @PostMapping
    public ResponseEntity<FoodDonation> createDonation(@RequestBody FoodDonation donation) {
        return ResponseEntity.ok(foodDonationService.createDonation(donation));
    }
    
    @GetMapping
    public ResponseEntity<List<FoodDonation>> getAllDonations() {
        return ResponseEntity.ok(foodDonationService.getAllDonations());
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<FoodDonation> getDonationById(@PathVariable Long id) {
        return ResponseEntity.ok(foodDonationService.getDonationById(id));
    }
    
    @PutMapping("/status/{id}")
    public ResponseEntity<FoodDonation> updateDonationStatus(@PathVariable Long id, @RequestParam FoodDonation.Status status) {
        return ResponseEntity.ok(foodDonationService.updateDonationStatus(id, status));
    }
}
