package com.foodbridge.config;

import com.foodbridge.entity.FoodDonation;
import com.foodbridge.entity.User;
import com.foodbridge.repository.FoodDonationRepository;
import com.foodbridge.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import java.time.LocalDateTime;

@Component
@RequiredArgsConstructor
public class DataInitializer implements CommandLineRunner {
    
    private final UserRepository userRepository;
    private final FoodDonationRepository foodDonationRepository;
    private final PasswordEncoder passwordEncoder;
    
    @Override
    public void run(String... args) {
        if (userRepository.count() == 0) {
            User donor = createUser("Admin User", "admin@foodbridge.com", "admin123", "9876543210", User.Role.ADMIN, "Hyderabad");
            User donorUser = createUser("Grand Hotel", "donor@foodbridge.com", "donor123", "9876543211", User.Role.DONOR, "MG Road, Hyderabad");
            createUser("Hope Foundation", "ngo@foodbridge.com", "ngo123", "9876543212", User.Role.NGO, "Jubilee Hills, Hyderabad");
            createUser("Rahul Kumar", "volunteer@foodbridge.com", "volunteer123", "9876543213", User.Role.VOLUNTEER, "Ameerpet, Hyderabad");
            
            System.out.println("✅ Dummy users created successfully!");
            System.out.println("📧 Admin: admin@foodbridge.com / admin123");
            System.out.println("📧 Donor: donor@foodbridge.com / donor123");
            System.out.println("📧 NGO: ngo@foodbridge.com / ngo123");
            System.out.println("📧 Volunteer: volunteer@foodbridge.com / volunteer123");
            
            createFoodDonations(donorUser.getId());
            System.out.println("✅ Dummy food donations with images created!");
        }
    }
    
    private User createUser(String name, String email, String password, String phone, User.Role role, String location) {
        User user = new User();
        user.setName(name);
        user.setEmail(email);
        user.setPassword(passwordEncoder.encode(password));
        user.setPhone(phone);
        user.setRole(role);
        user.setLocation(location);
        return userRepository.save(user);
    }
    
    private void createFoodDonations(Long donorId) {
        LocalDateTime now = LocalDateTime.now();
        
        createFood("Biryani", "10 kg", now, now.plusHours(6), "MG Road, Hyderabad", "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400", donorId);
        createFood("Pizza", "15 boxes", now, now.plusHours(4), "Banjara Hills, Hyderabad", "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400", donorId);
        createFood("Sandwiches", "50 pieces", now, now.plusHours(5), "Jubilee Hills, Hyderabad", "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400", donorId);
        createFood("Rice & Curry", "20 kg", now, now.plusHours(8), "Ameerpet, Hyderabad", "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400", donorId);
        createFood("Fruits", "25 kg", now, now.plusHours(12), "Secunderabad", "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=400", donorId);
        createFood("Pasta", "12 kg", now, now.plusHours(6), "Gachibowli, Hyderabad", "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400", donorId);
    }
    
    private void createFood(String name, String quantity, LocalDateTime prepared, LocalDateTime expiry, String location, String imageUrl, Long donorId) {
        FoodDonation food = new FoodDonation();
        food.setFoodName(name);
        food.setQuantity(quantity);
        food.setPreparedTime(prepared);
        food.setExpiryTime(expiry);
        food.setLocation(location);
        food.setImageUrl(imageUrl);
        food.setStatus(FoodDonation.Status.AVAILABLE);
        food.setDonorId(donorId);
        foodDonationRepository.save(food);
    }
}
