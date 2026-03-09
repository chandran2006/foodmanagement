@echo off
echo ========================================
echo    FoodBridge - Quick Start Script
echo ========================================
echo.

echo [1/3] Checking MySQL...
mysql -u root -pChandran@2006 -e "CREATE DATABASE IF NOT EXISTS foodbridge_db;" 2>nul
if %errorlevel% neq 0 (
    echo ERROR: MySQL not running or credentials incorrect!
    echo Please start MySQL and ensure password is: Chandran@2006
    pause
    exit /b 1
)
echo ✓ MySQL database ready!
echo.

echo [2/3] Starting Backend (Spring Boot)...
cd backend
start "FoodBridge Backend" cmd /k "mvn spring-boot:run"
echo ✓ Backend starting on http://localhost:8080
echo.

timeout /t 10 /nobreak >nul

echo [3/3] Starting Frontend (React)...
cd ..\project
start "FoodBridge Frontend" cmd /k "npm run dev"
echo ✓ Frontend starting on http://localhost:5173
echo.

echo ========================================
echo    FoodBridge is starting!
echo ========================================
echo.
echo Backend:  http://localhost:8080
echo Frontend: http://localhost:5173
echo Swagger:  http://localhost:8080/swagger-ui.html
echo.
echo DUMMY LOGIN CREDENTIALS:
echo ------------------------
echo Admin:     admin@foodbridge.com / admin123
echo Donor:     donor@foodbridge.com / donor123
echo NGO:       ngo@foodbridge.com / ngo123
echo Volunteer: volunteer@foodbridge.com / volunteer123
echo.
echo Press any key to exit this window...
pause >nul
