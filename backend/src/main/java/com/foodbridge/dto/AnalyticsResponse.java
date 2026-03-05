package com.foodbridge.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AnalyticsResponse {
    private long totalUsers;
    private long totalDonations;
    private long totalMealsServed;
    private long activeNGOs;
}
