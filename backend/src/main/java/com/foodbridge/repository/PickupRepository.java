package com.foodbridge.repository;

import com.foodbridge.entity.Pickup;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface PickupRepository extends JpaRepository<Pickup, Long> {
    List<Pickup> findByVolunteerId(Long volunteerId);
}
