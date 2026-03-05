package com.foodbridge.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDateTime;

@Entity
@Table(name = "food_requests")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class FoodRequest {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private Long foodDonationId;
    private Long ngoId;
    private LocalDateTime requestTime;
    private String status;
}
