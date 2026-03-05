package com.foodbridge.controller;

import com.foodbridge.dto.PickupRequest;
import com.foodbridge.entity.Pickup;
import com.foodbridge.service.PickupService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/pickups")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class PickupController {
    
    private final PickupService pickupService;
    
    @PostMapping("/accept")
    public ResponseEntity<Pickup> acceptPickup(@RequestBody PickupRequest request) {
        return ResponseEntity.ok(pickupService.acceptPickup(request));
    }
    
    @PutMapping("/complete")
    public ResponseEntity<Pickup> completeDelivery(@RequestParam Long pickupId) {
        return ResponseEntity.ok(pickupService.completeDelivery(pickupId));
    }
    
    @GetMapping("/volunteer/{volunteerId}")
    public ResponseEntity<List<Pickup>> getPickupsByVolunteer(@PathVariable Long volunteerId) {
        return ResponseEntity.ok(pickupService.getPickupsByVolunteer(volunteerId));
    }
}
