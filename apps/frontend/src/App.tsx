import { useState } from "react";
import LoginForm from "./features/auth/components/loginForm";
import RegisterForm from "./features/auth/components/registerForm";

export default function App() {
  const [isLoginView, setIsLoginView] = useState(true);

  return (
    <div style={{ padding: '2rem', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h1 style={{ marginBottom: '2rem' }}>Welcome to CarpTrack</h1>
      
      {isLoginView ? <LoginForm /> : <RegisterForm />}

      <button 
        onClick={() => setIsLoginView(!isLoginView)}
        style={{ 
          marginTop: '2rem', 
          background: 'none', 
          border: 'none', 
          color: 'blue', 
          textDecoration: 'underline', 
          cursor: 'pointer' 
        }}
      >
        {isLoginView 
          ? "Don't have an account? Sign Up here." 
          : "Already have an account? Log In here."}
      </button>
    </div>
  );
}