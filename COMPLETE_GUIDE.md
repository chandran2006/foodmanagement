# 🍽️ FoodBridge - Complete Full Stack Application

## 🎯 Project Overview
**FoodBridge** is a comprehensive Food Waste Management System that connects food donors (restaurants, hotels, marriage halls, households) with NGOs and volunteers to reduce food waste and distribute surplus food to those in need.

---

## 🏗️ Architecture

### Frontend (React + TypeScript + Vite)
- **Location**: `/project`
- **Port**: 5173
- **Tech Stack**: React 18, TypeScript, Tailwind CSS, Shadcn UI, Axios

### Backend (Spring Boot)
- **Location**: `/backend`
- **Port**: 8080
- **Tech Stack**: Java 17, Spring Boot 3.2, Spring Security, JWT, MySQL, Swagger

---

## 🚀 Quick Start Guide

### Prerequisites
- Node.js 18+ and npm/bun
- Java 17+
- Maven 3.6+
- MySQL 8.0+

### 1️⃣ Database Setup
```sql
CREATE DATABASE foodbridge_db;
```

### 2️⃣ Start Backend
```bash
cd backend
mvn clean install
mvn spring-boot:run
```
Backend will run on: http://localhost:8080

### 3️⃣ Start Frontend
```bash
cd project
npm install
npm run dev
```
Frontend will run on: http://localhost:5173

---

## 🔐 Dummy Login Credentials

### Admin Dashboard
- **Email**: admin@foodbridge.com
- **Password**: admin123
- **Access**: Full system control, analytics, user management

### Donor Dashboard
- **Email**: donor@foodbridge.com
- **Password**: donor123
- **Access**: Create food donations, track donation status

### NGO Dashboard
- **Email**: ngo@foodbridge.com
- **Password**: ngo123
- **Access**: View available food, request donations

### Volunteer Dashboard
- **Email**: volunteer@foodbridge.com
- **Password**: volunteer123
- **Access**: Accept pickups, manage deliveries

---

## 📋 Features

### 🔹 Authentication & Authorization
- JWT-based secure authentication
- Role-based access control (ADMIN, DONOR, NGO, VOLUNTEER)
- Password encryption with BCrypt

### 🔹 Donor Features
- Create food donations with details (name, quantity, expiry, location)
- Upload food images
- Track donation status (Available → Requested → Picked Up → Delivered)
- View donation history

### 🔹 NGO Features
- Browse available food donations
- Request food for distribution
- Track request status
- View delivery details

### 🔹 Volunteer Features
- View pickup requests
- Accept pickup assignments
- Update delivery status
- Track completed deliveries

### 🔹 Admin Features
- System analytics dashboard
- User management
- Donation monitoring
- Performance metrics (total users, donations, meals served, active NGOs)

---

## 🛠️ API Endpoints

### Authentication
```
POST /api/auth/register - Register new user
POST /api/auth/login    - User login
```

### Food Donations
```
POST   /api/donations           - Create donation
GET    /api/donations           - Get all donations
GET    /api/donations/{id}      - Get donation by ID
PUT    /api/donations/status/{id} - Update status
```

### Food Requests
```
POST   /api/requests            - Request food
GET    /api/requests/ngo/{ngoId} - Get NGO requests
```

### Pickups
```
POST   /api/pickups/accept      - Accept pickup
PUT    /api/pickups/complete    - Complete delivery
GET    /api/pickups/volunteer/{volunteerId} - Get volunteer pickups
```

### Admin
```
GET    /api/admin/users         - Get all users
GET    /api/admin/donations     - Get all donations
GET    /api/admin/analytics     - Get system analytics
```

---

## 📊 Database Schema

### Users Table
- id, name, email, password, phone, role, location

### Food Donations Table
- id, foodName, quantity, preparedTime, expiryTime, location, imageUrl, status, donorId

### Food Requests Table
- id, foodDonationId, ngoId, requestTime, status

### Pickups Table
- id, foodDonationId, volunteerId, pickupTime, deliveryTime, status

---

## 🔄 System Workflow

1. **Donor** uploads food donation with details
2. **NGO** views available food and sends request
3. **Volunteer** accepts pickup request
4. **Volunteer** picks up food from donor location
5. **Volunteer** delivers food to NGO
6. **Admin** monitors entire system and analytics

---

## 🎨 Frontend Structure
```
project/src/
├── components/     # Reusable UI components
├── pages/          # Dashboard pages (Admin, Donor, NGO, Volunteer)
├── services/       # API integration services
├── hooks/          # Custom React hooks
├── lib/            # Utility functions
└── assets/         # Images and static files
```

## 🏛️ Backend Structure
```
backend/src/main/java/com/foodbridge/
├── entity/         # JPA entities
├── repository/     # Data access layer
├── service/        # Business logic
├── controller/     # REST controllers
├── dto/            # Data transfer objects
├── security/       # JWT authentication
└── config/         # Configuration classes
```

---

## 📱 Access Points

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:8080/api
- **Swagger UI**: http://localhost:8080/swagger-ui.html
- **API Docs**: http://localhost:8080/v3/api-docs

---

## 🔒 Security Features

- JWT token-based authentication
- Role-based authorization
- CORS configuration for frontend-backend communication
- Password encryption
- Stateless session management
- Secure API endpoints

---

## 🌟 Key Improvements

1. ✅ **Full Integration**: Frontend and backend fully connected
2. ✅ **CORS Enabled**: Seamless cross-origin communication
3. ✅ **Dummy Data**: Pre-populated users for all roles
4. ✅ **Auto Login**: Ready-to-use credentials for testing
5. ✅ **JWT Auth**: Secure token-based authentication
6. ✅ **API Service**: Centralized API calls with interceptors
7. ✅ **Data Initialization**: Automatic database seeding

---

## 📝 Development Notes

### Frontend Development
```bash
cd project
npm run dev      # Start dev server
npm run build    # Production build
npm run preview  # Preview production build
```

### Backend Development
```bash
cd backend
mvn spring-boot:run          # Run application
mvn clean install            # Build project
mvn test                     # Run tests
```

---

## 🐛 Troubleshooting

### Backend won't start
- Ensure MySQL is running
- Check database credentials in `application.properties`
- Verify Java 17 is installed

### Frontend can't connect to backend
- Ensure backend is running on port 8080
- Check CORS configuration
- Verify API_BASE_URL in `api.ts`

### Login fails
- Check database has dummy users (run DataInitializer)
- Verify credentials match dummy data
- Check JWT token generation

---

## 📈 Future Enhancements

- Real-time notifications
- Google Maps integration for location tracking
- Mobile app (React Native)
- SMS/Email notifications
- Rating system for donors and volunteers
- Advanced analytics and reporting
- Multi-language support

---

## 👥 User Roles Summary

| Role | Capabilities |
|------|-------------|
| **Admin** | System management, analytics, user oversight |
| **Donor** | Create donations, track status |
| **NGO** | Request food, manage distributions |
| **Volunteer** | Accept pickups, deliver food |

---

## 🎉 Ready to Use!

The application is fully integrated and ready to use. Simply:
1. Start MySQL database
2. Run backend (port 8080)
3. Run frontend (port 5173)
4. Login with any dummy credentials above
5. Explore the dashboards!

**Happy Food Bridging! 🌉🍽️**
