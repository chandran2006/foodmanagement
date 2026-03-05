package com.foodbridge.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PickupRequest {
    private Long foodDonationId;
    private Long volunteerId;
}
