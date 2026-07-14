import { useState } from 'react';
import { registerUser } from './api/authApi'; 

export default function RegisterForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState<number | ''>(''); 
  const [error, setError] = useState('');

  const handleRegister = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    try {
      const response = await registerUser({ 
        username, 
        email, 
        password, 
        age: Number(age) 
      });
      localStorage.setItem('access_token', response.access_token);
      window.location.href = '/dashboard'; 

    } catch (error) {
      if (error instanceof Error) {
        setError(error.message); 
      } else {
        setError('An unexpected system error occurred');
      }
    }
  };

  return (
    <form onSubmit={handleRegister} className="flex flex-col space-y-4 max-w-sm mx-auto mt-10">
      <h2>Create Account</h2>
      {error && <div className="text-red-500">{error}</div>}
      
      <input type="text" placeholder="Username" required value={username} onChange={(e) => setUsername(e.target.value)} className="border p-2" />
      <input type="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} className="border p-2" />
      <input type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} className="border p-2" />
      <input type="number" placeholder="Age" required value={age} onChange={(e) => setAge(e.target.value ? Number(e.target.value) : '')} className="border p-2" />
      
      <button type="submit" className="bg-blue-600 text-white p-2 rounded">Sign Up</button>
    </form>
  );
}