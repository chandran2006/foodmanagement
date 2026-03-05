package com.foodbridge.repository;

import com.foodbridge.entity.FoodRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface FoodRequestRepository extends JpaRepository<FoodRequest, Long> {
    List<FoodRequest> findByNgoId(Long ngoId);
}
