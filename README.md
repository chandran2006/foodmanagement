# 🍽️ FoodBridge - Food Waste Management System

## 🎯 Complete Full Stack Application

**FoodBridge** connects food donors with NGOs and volunteers to reduce food waste and help those in need.

---

## 🚀 Quick Start (Windows)

### Option 1: Automated Start
```bash
start.bat
```

### Option 2: Manual Start

**1. Start Backend:**
```bash
cd backend
mvn spring-boot:run
```

**2. Start Frontend:**
```bash
cd project
npm install
npm run dev
```

---

## 🔐 Login Credentials

| Role | Email | Password | Dashboard |
|------|-------|----------|-----------|
| **Admin** | admin@foodbridge.com | admin123 | System Management |
| **Donor** | donor@foodbridge.com | donor123 | Create Donations |
| **NGO** | ngo@foodbridge.com | ngo123 | Request Food |
| **Volunteer** | volunteer@foodbridge.com | volunteer123 | Manage Pickups |

---

## 📍 Access Points

- **Frontend**: http://localhost:5173
- **Backend**: http://localhost:8080
- **Swagger**: http://localhost:8080/swagger-ui.html

---

## 🏗️ Tech Stack

### Frontend
- React 18 + TypeScript
- Vite
- Tailwind CSS + Shadcn UI
- Axios

### Backend
- Java 17
- Spring Boot 3.2
- Spring Security + JWT
- MySQL
- Swagger/OpenAPI

---

## 📋 Features

✅ JWT Authentication  
✅ Role-Based Access Control  
✅ Food Donation Management  
✅ NGO Request System  
✅ Volunteer Pickup Coordination  
✅ Admin Analytics Dashboard  
✅ Real-time Status Updates  
✅ CORS Enabled  
✅ Auto Database Seeding  

---

## 📂 Project Structure

```
food/
├── backend/          # Spring Boot API
├── project/          # React Frontend
├── start.bat         # Quick start script
├── CREDENTIALS.txt   # Login reference
└── COMPLETE_GUIDE.md # Full documentation
```

---

## 🔄 System Workflow

1. **Donor** creates food donation
2. **NGO** requests available food
3. **Volunteer** accepts pickup
4. **Volunteer** delivers to NGO
5. **Admin** monitors analytics

---

## 📖 Documentation

- **Complete Guide**: `COMPLETE_GUIDE.md`
- **Backend Docs**: `backend/README.md`
- **Credentials**: `CREDENTIALS.txt`

---

## 🛠️ Prerequisites

- Node.js 18+
- Java 17+
- Maven 3.6+
- MySQL 8.0+

---

## 💾 Database Setup

```sql
CREATE DATABASE foodbridge_db;
```

Database credentials in `backend/src/main/resources/application.properties`

---

## 🎉 Ready to Use!

All dummy users are automatically created on first backend startup. Just login and explore!

**Happy Food Bridging! 🌉**
