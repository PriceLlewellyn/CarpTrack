import { useState } from 'react';
import { loginUser } from './api/authApi'; 

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    try {
      const response = await loginUser({ email, password });
      localStorage.setItem('access_token', response.access_token);
      window.location.href = '/dashboard'; 

    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unexpected system error occurred');
      }
    }
  };

  return (
    <form onSubmit={handleLogin} className="flex flex-col space-y-4 max-w-sm mx-auto mt-10">
      <h2>Welcome Back</h2>
      {error && <div className="text-red-500">{error}</div>}
      
      <input type="email" placeholder="Email Address" required value={email} onChange={(e) => setEmail(e.target.value)} className="border p-2" />
      <input type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} className="border p-2" />
      
      <button type="submit" className="bg-blue-600 text-white p-2 rounded">Log In</button>
    </form>
  );
}