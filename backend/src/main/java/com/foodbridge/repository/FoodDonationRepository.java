package com.foodbridge.repository;

import com.foodbridge.entity.FoodDonation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FoodDonationRepository extends JpaRepository<FoodDonation, Long> {
}
