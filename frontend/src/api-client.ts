import { LoginFormData } from "./pages/SignIn";
import { RegisterFormData } from "./pages/SignUp";
import { AdoptionType, PaymentIntentResponse, PetSearchResponse, PetType, UserType } from "../../backend/src/shared/types";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";


export const fetchCurrentUser = async ():Promise<UserType> => {
  const response = await fetch(`${API_BASE_URL}/api/users/me`, {
    credentials: 'include',
  });
  if (!response.ok) {
    throw new Error('Error getting current user');
  }
  return response.json();
};


export const register = async (formData:RegisterFormData) => {
  const response = await fetch(`${API_BASE_URL}/api/users/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });
  const data = await response.json();
    if (!response.ok) {
        throw new Error(data.message);
    }
};

export const login = async (formData:LoginFormData) => {
  const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
    credentials: 'include',
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message);
  }
  return data;
};

export const validateToken = async () => {
  const response = await fetch(`${API_BASE_URL}/api/auth/validate-token`, {
    credentials: 'include',
  });

  if (!response.ok) {
    throw new Error("Token invalid");
  }
  return response.json();
};


export const logout = async () => {
  const response = await fetch(`${API_BASE_URL}/api/auth/logout`, {
    method: 'POST', 
    credentials: 'include',
  });
  if (!response.ok) {
    throw new Error("Logout failed");
  }
}


export const addMyPet = async (petFormData:FormData) => {
  const response = await fetch(`${API_BASE_URL}/api/my-pets`, {
    method: 'POST',
    body: petFormData,
    credentials: 'include',
  });
  if (!response.ok) {
    throw new Error("Error saving pet");
  }
  return response.json();
};


export const fetchMyPets = async ():Promise<PetType[]> => {
  const response = await fetch(`${API_BASE_URL}/api/my-pets`, {
    credentials: 'include',
  });
  if (!response.ok) {
    throw new Error("Error getting pets");
  }
  return response.json();
};


export const fetchMyPetById = async (petId:string):Promise<PetType> => {
  const response = await fetch(`${API_BASE_URL}/api/my-pets/${petId}`, {
    credentials: 'include',
  });
  if (!response.ok) {
    throw new Error("Error getting pet");
  }
  return response.json();
};


export const updateMyPetById = async (petFormData:FormData)=>{
    const response = await fetch(`${API_BASE_URL}/api/my-pets/${petFormData.get("petId")}`, { 
        method: 'PUT',
        body: petFormData,
        credentials: 'include',
    }); 
    if (!response.ok) {
        throw new Error("Error updating pet");
    }
    return response.json();
}


//view all pets for all users

export const fetchAllPets = async ():Promise<PetType[]> => {
  const response = await fetch(`${API_BASE_URL}/api/pets`, {
    credentials: 'include',
  });
  if (!response.ok) {
    throw new Error("Error getting pets");
  }
  return response.json();
};



export type SearchParams = {
  age?: string;
  size?: string;
  breed?: string;
  gender?: string;
  page?:string
}

export const searchPets = async (searchParams:SearchParams):Promise<PetSearchResponse> => {
 const queryParams = new URLSearchParams()
 queryParams.append("age",searchParams.age || "")
  queryParams.append("size",searchParams.size || "")
  queryParams.append("breed",searchParams.breed || "")
  queryParams.append("gender",searchParams.gender || "")
  queryParams.append("page",searchParams.page || "")

  const response = await fetch(`${API_BASE_URL}/api/pets/search?${queryParams}`);
  if (!response.ok) {
    throw new Error("Error searching pets");
  }
  return response.json();
}

export const fetchPetById = async (petId:string):Promise<PetType> => {
  const response = await fetch(`${API_BASE_URL}/api/pets/${petId}`);
  if (!response.ok) {
    throw new Error("Error getting pet");
  }
  return response.json();
};


export const createPaymentIntent = async (petId:string):Promise<PaymentIntentResponse> => {
  const response = await fetch(`${API_BASE_URL}/api/pets/${petId}/adoptions/payment-intent`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({petId}),
  });
  if (!response.ok) {
    throw new Error("Error creating payment intent");
  }
  return response.json();
} 

export const createPetAdoption = async (formData:AdoptionType) => {
  const response = await fetch(`${API_BASE_URL}/api/pets/${formData.petId}/adoptions`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });
  if (!response.ok) {
    throw new Error("Error creating pet adoption");
  }
}