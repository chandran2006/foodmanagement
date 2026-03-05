package com.foodbridge.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "users")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String name;
    
    @Column(unique = true)
    private String email;
    
    private String password;
    private String phone;
    
    @Enumerated(EnumType.STRING)
    private Role role;
    
    private String location;
    
    public enum Role {
        ADMIN, DONOR, NGO, VOLUNTEER
    }
}
