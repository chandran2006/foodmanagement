@echo off
echo ========================================
echo    Testing FoodBridge Integration
echo ========================================
echo.

echo Testing Backend Health...
curl -s http://localhost:8080/api/auth/login >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Backend is not running on port 8080
    echo Please start backend: cd backend ^&^& mvn spring-boot:run
    pause
    exit /b 1
)
echo ✅ Backend is running

echo.
echo Testing Frontend...
curl -s http://localhost:5173 >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Frontend is not running on port 5173
    echo Please start frontend: cd project ^&^& npm run dev
    pause
    exit /b 1
)
echo ✅ Frontend is running

echo.
echo ========================================
echo    ✅ All Systems Operational!
echo ========================================
echo.
echo Frontend: http://localhost:5173
echo Backend:  http://localhost:8080
echo Swagger:  http://localhost:8080/swagger-ui.html
echo.
pause
