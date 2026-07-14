import { apiFetch } from '../../../../lib/api'; 
import type { LoginPayload, RegisterPayload } from '../types';

export const registerUser = async (data: RegisterPayload) => {
  return apiFetch('/auth/register', {
    method: 'POST',
    body: JSON.stringify(data),
  });
};

export const loginUser = async (data: LoginPayload) => {
  return apiFetch('/auth/login', {
    method: 'POST',
    body: JSON.stringify(data),
  });
};