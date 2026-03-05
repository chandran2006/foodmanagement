package com.foodbridge.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDateTime;

@Entity
@Table(name = "food_donations")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class FoodDonation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String foodName;
    private String quantity;
    private LocalDateTime preparedTime;
    private LocalDateTime expiryTime;
    private String location;
    private String imageUrl;
    
    @Enumerated(EnumType.STRING)
    private Status status;
    
    private Long donorId;
    
    public enum Status {
        AVAILABLE, REQUESTED, PICKED_UP, DELIVERED
    }
}
