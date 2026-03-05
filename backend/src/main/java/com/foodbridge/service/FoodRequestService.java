package com.foodbridge.service;

import com.foodbridge.entity.FoodRequest;
import com.foodbridge.repository.FoodRequestRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class FoodRequestService {
    
    private final FoodRequestRepository foodRequestRepository;
    
    public FoodRequest requestFood(FoodRequest request) {
        request.setRequestTime(LocalDateTime.now());
        request.setStatus("PENDING");
        return foodRequestRepository.save(request);
    }
    
    public List<FoodRequest> getRequestsByNgo(Long ngoId) {
        return foodRequestRepository.findByNgoId(ngoId);
    }
}
