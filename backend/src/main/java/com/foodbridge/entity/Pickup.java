package com.foodbridge.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDateTime;

@Entity
@Table(name = "pickups")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Pickup {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private Long foodDonationId;
    private Long volunteerId;
    private LocalDateTime pickupTime;
    private LocalDateTime deliveryTime;
    private String status;
}
