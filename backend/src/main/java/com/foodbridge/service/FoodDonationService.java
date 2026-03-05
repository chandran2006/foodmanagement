package com.foodbridge.service;

import com.foodbridge.entity.FoodDonation;
import com.foodbridge.repository.FoodDonationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@RequiredArgsConstructor
public class FoodDonationService {
    
    private final FoodDonationRepository foodDonationRepository;
    
    public FoodDonation createDonation(FoodDonation donation) {
        donation.setStatus(FoodDonation.Status.AVAILABLE);
        return foodDonationRepository.save(donation);
    }
    
    public List<FoodDonation> getAllDonations() {
        return foodDonationRepository.findAll();
    }
    
    public FoodDonation getDonationById(Long id) {
        return foodDonationRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Donation not found"));
    }
    
    public FoodDonation updateDonationStatus(Long id, FoodDonation.Status status) {
        FoodDonation donation = getDonationById(id);
        donation.setStatus(status);
        return foodDonationRepository.save(donation);
    }
}
