package com.foodbridge.service;

import com.foodbridge.dto.PickupRequest;
import com.foodbridge.entity.Pickup;
import com.foodbridge.repository.PickupRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class PickupService {
    
    private final PickupRepository pickupRepository;
    
    public Pickup acceptPickup(PickupRequest request) {
        Pickup pickup = new Pickup();
        pickup.setFoodDonationId(request.getFoodDonationId());
        pickup.setVolunteerId(request.getVolunteerId());
        pickup.setPickupTime(LocalDateTime.now());
        pickup.setStatus("ACCEPTED");
        return pickupRepository.save(pickup);
    }
    
    public Pickup completeDelivery(Long pickupId) {
        Pickup pickup = pickupRepository.findById(pickupId)
                .orElseThrow(() -> new RuntimeException("Pickup not found"));
        pickup.setDeliveryTime(LocalDateTime.now());
        pickup.setStatus("COMPLETED");
        return pickupRepository.save(pickup);
    }
    
    public List<Pickup> getPickupsByVolunteer(Long volunteerId) {
        return pickupRepository.findByVolunteerId(volunteerId);
    }
}
