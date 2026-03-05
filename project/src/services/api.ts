import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

export default api;

// ---- MOCK DATA ----

export type FoodStatus = "Available" | "Requested" | "Picked Up" | "Delivered";
export type UserRole = "donor" | "ngo" | "volunteer" | "admin";

export interface FoodDonation {
  id: string;
  foodName: string;
  quantity: string;
  preparedTime: string;
  expiryTime: string;
  pickupLocation: string;
  status: FoodStatus;
  donorName: string;
  imageUrl?: string;
}

export interface PickupRequest {
  id: string;
  foodName: string;
  quantity: string;
  pickupLocation: string;
  deliveryLocation: string;
  donorName: string;
  ngoName: string;
  status: "Pending" | "Accepted" | "In Transit" | "Delivered";
}

export interface UserInfo {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: UserRole;
  joinedDate: string;
}

export const mockDonations: FoodDonation[] = [
  { id: "1", foodName: "Biryani", quantity: "50 plates", preparedTime: "12:00 PM", expiryTime: "8:00 PM", pickupLocation: "Grand Hotel, MG Road", status: "Available", donorName: "Grand Hotel" },
  { id: "2", foodName: "Chapati & Dal", quantity: "100 servings", preparedTime: "11:30 AM", expiryTime: "6:00 PM", pickupLocation: "Annapurna Restaurant", status: "Requested", donorName: "Annapurna" },
  { id: "3", foodName: "Rice & Sambar", quantity: "75 plates", preparedTime: "1:00 PM", expiryTime: "7:00 PM", pickupLocation: "Sai Marriage Hall", status: "Picked Up", donorName: "Sai Hall" },
  { id: "4", foodName: "Sandwiches", quantity: "30 packs", preparedTime: "10:00 AM", expiryTime: "4:00 PM", pickupLocation: "Home Kitchen, Banjara Hills", status: "Delivered", donorName: "Priya Sharma" },
  { id: "5", foodName: "Fruit Salad", quantity: "40 bowls", preparedTime: "9:00 AM", expiryTime: "3:00 PM", pickupLocation: "Fresh Foods Cafe", status: "Available", donorName: "Fresh Foods" },
  { id: "6", foodName: "Pasta & Bread", quantity: "60 servings", preparedTime: "11:00 AM", expiryTime: "5:00 PM", pickupLocation: "Italian Corner", status: "Available", donorName: "Italian Corner" },
];

export const mockPickupRequests: PickupRequest[] = [
  { id: "1", foodName: "Biryani", quantity: "50 plates", pickupLocation: "Grand Hotel, MG Road", deliveryLocation: "Hope Foundation, Jubilee Hills", donorName: "Grand Hotel", ngoName: "Hope Foundation", status: "Pending" },
  { id: "2", foodName: "Chapati & Dal", quantity: "100 servings", pickupLocation: "Annapurna Restaurant", deliveryLocation: "Care NGO, Ameerpet", donorName: "Annapurna", ngoName: "Care NGO", status: "Accepted" },
  { id: "3", foodName: "Rice & Sambar", quantity: "75 plates", pickupLocation: "Sai Marriage Hall", deliveryLocation: "Feed India, Secunderabad", donorName: "Sai Hall", ngoName: "Feed India", status: "In Transit" },
];

export const mockUsers: UserInfo[] = [
  { id: "1", name: "Grand Hotel", email: "grand@hotel.com", phone: "9876543210", role: "donor", joinedDate: "2025-01-15" },
  { id: "2", name: "Hope Foundation", email: "hope@ngo.org", phone: "9876543211", role: "ngo", joinedDate: "2025-02-10" },
  { id: "3", name: "Rahul Kumar", email: "rahul@gmail.com", phone: "9876543212", role: "volunteer", joinedDate: "2025-03-01" },
  { id: "4", name: "Priya Sharma", email: "priya@gmail.com", phone: "9876543213", role: "donor", joinedDate: "2025-01-20" },
  { id: "5", name: "Care NGO", email: "care@ngo.org", phone: "9876543214", role: "ngo", joinedDate: "2025-02-15" },
  { id: "6", name: "Amit Singh", email: "amit@gmail.com", phone: "9876543215", role: "volunteer", joinedDate: "2025-03-05" },
];

export const mockStats = {
  totalDonations: 1248,
  totalNGOs: 45,
  totalVolunteers: 189,
  mealsServed: 32450,
  deliverySuccessRate: 94.5,
  activeNGOs: 38,
};
