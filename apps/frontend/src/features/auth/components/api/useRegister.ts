import { useMutation } from '@tanstack/react-query';
import { registerUser } from './authApi'; 
import type { RegisterPayload } from '../types';

export const useRegister = () => {
  return useMutation({
    mutationFn: (data: RegisterPayload) => registerUser(data),
  });
};