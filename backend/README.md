# FoodBridge Backend - Food Waste Management System

## Project Overview
FoodBridge is a Food Waste Management System that connects food donors (restaurants, hotels, marriage halls, households) with NGOs and volunteers to reduce food waste and distribute surplus food efficiently.

## Tech Stack
- Java 17
- Spring Boot 3.2.0
- Spring Data JPA
- Spring Security with JWT
- MySQL Database
- Swagger (Springdoc OpenAPI)
- Lombok

## Project Structure
```
backend/
├── src/main/java/com/foodbridge/
│   ├── FoodBridgeApplication.java
│   ├── entity/
│   │   ├── User.java
│   │   ├── FoodDonation.java
│   │   ├── FoodRequest.java
│   │   └── Pickup.java
│   ├── repository/
│   │   ├── UserRepository.java
│   │   ├── FoodDonationRepository.java
│   │   ├── FoodRequestRepository.java
│   │   └── PickupRepository.java
│   ├── service/
│   │   ├── UserService.java
│   │   ├── FoodDonationService.java
│   │   ├── FoodRequestService.java
│   │   └── PickupService.java
│   ├── controller/
│   │   ├── AuthController.java
│   │   ├── FoodDonationController.java
│   │   ├── FoodRequestController.java
│   │   ├── PickupController.java
│   │   └── AdminController.java
│   ├── dto/
│   │   ├── RegisterRequest.java
│   │   ├── LoginRequest.java
│   │   ├── AuthResponse.java
│   │   ├── PickupRequest.java
│   │   └── AnalyticsResponse.java
│   ├── security/
│   │   ├── JwtUtil.java
│   │   └── JwtFilter.java
│   └── config/
│       ├── SecurityConfig.java
│       └── OpenApiConfig.java
└── src/main/resources/
    └── application.properties
```

## Setup Instructions

### 1. Prerequisites
- Java 17 or higher
- Maven 3.6+
- MySQL 8.0+

### 2. Database Setup
Create the MySQL database:
```sql
CREATE DATABASE foodbridge_db;
```

### 3. Configuration
Database configuration is already set in `application.properties`:
- Database: foodbridge_db
- Username: root
- Password: Chandran@2006
- Port: 8080

### 4. Build and Run
```bash
cd backend
mvn clean install
mvn spring-boot:run
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login

### Food Donations
- `POST /api/donations` - Create food donation
- `GET /api/donations` - Get all donations
- `GET /api/donations/{id}` - Get donation by ID
- `PUT /api/donations/status/{id}` - Update donation status

### Food Requests
- `POST /api/requests` - Request food
- `GET /api/requests/ngo/{ngoId}` - Get requests by NGO

### Pickups
- `POST /api/pickups/accept` - Accept pickup
- `PUT /api/pickups/complete` - Complete delivery
- `GET /api/pickups/volunteer/{volunteerId}` - Get pickups by volunteer

### Admin
- `GET /api/admin/users` - Get all users (Admin only)
- `GET /api/admin/donations` - Get all donations (Admin only)
- `GET /api/admin/analytics` - Get system analytics (Admin only)

## User Roles
- **ADMIN** - System administrator
- **DONOR** - Food donors (restaurants, hotels, etc.)
- **NGO** - Non-governmental organizations
- **VOLUNTEER** - Delivery volunteers

## Donation Status
- **AVAILABLE** - Food is available for request
- **REQUESTED** - NGO has requested the food
- **PICKED_UP** - Volunteer has picked up the food
- **DELIVERED** - Food has been delivered

## Swagger Documentation
Access API documentation at: http://localhost:8080/swagger-ui.html

## Security
- JWT-based authentication
- Role-based access control
- Stateless session management
- BCrypt password encoding

## System Workflow
1. Donor uploads food donation
2. NGO views available food and sends request
3. Volunteer accepts pickup request
4. Volunteer delivers food to NGO
5. Admin monitors system analytics

## Database Tables
- `users` - User information with roles
- `food_donations` - Food donation details
- `food_requests` - NGO food requests
- `pickups` - Volunteer pickup information
