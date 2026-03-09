import api from './api';

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
  phone: string;
  role: 'ADMIN' | 'DONOR' | 'NGO' | 'VOLUNTEER';
  location: string;
}

export interface AuthResponse {
  token: string;
  email: string;
  role: string;
  userId: number;
}

export interface FoodDonation {
  id?: number;
  foodName: string;
  quantity: string;
  preparedTime: string;
  expiryTime: string;
  location: string;
  imageUrl?: string;
  status?: string;
  donorId?: number;
}

export interface FoodRequest {
  id?: number;
  foodDonationId: number;
  ngoId: number;
  requestTime?: string;
  status?: string;
}

export interface Pickup {
  id?: number;
  foodDonationId: number;
  volunteerId: number;
  pickupTime?: string;
  deliveryTime?: string;
  status?: string;
}

export const authService = {
  login: async (data: LoginRequest): Promise<AuthResponse> => {
    const response = await api.post('/auth/login', data);
    return response.data;
  },
  
  register: async (data: RegisterRequest): Promise<AuthResponse> => {
    const response = await api.post('/auth/register', data);
    return response.data;
  }
};

export const donationService = {
  create: async (data: FoodDonation) => {
    const response = await api.post('/donations', data);
    return response.data;
  },
  
  getAll: async () => {
    const response = await api.get('/donations');
    return response.data;
  },
  
  getById: async (id: number) => {
    const response = await api.get(`/donations/${id}`);
    return response.data;
  },
  
  updateStatus: async (id: number, status: string) => {
    const response = await api.put(`/donations/status/${id}?status=${status}`);
    return response.data;
  }
};

export const requestService = {
  create: async (data: FoodRequest) => {
    const response = await api.post('/requests', data);
    return response.data;
  },
  
  getByNgo: async (ngoId: number) => {
    const response = await api.get(`/requests/ngo/${ngoId}`);
    return response.data;
  }
};

export const pickupService = {
  accept: async (data: { foodDonationId: number; volunteerId: number }) => {
    const response = await api.post('/pickups/accept', data);
    return response.data;
  },
  
  complete: async (pickupId: number) => {
    const response = await api.put(`/pickups/complete?pickupId=${pickupId}`);
    return response.data;
  },
  
  getByVolunteer: async (volunteerId: number) => {
    const response = await api.get(`/pickups/volunteer/${volunteerId}`);
    return response.data;
  }
};

export const adminService = {
  getUsers: async () => {
    const response = await api.get('/admin/users');
    return response.data;
  },
  
  getDonations: async () => {
    const response = await api.get('/admin/donations');
    return response.data;
  },
  
  getAnalytics: async () => {
    const response = await api.get('/admin/analytics');
    return response.data;
  }
};
