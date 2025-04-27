import React, { createContext, useState } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signup = async (name, email, password) => {
    const res = await axios.post('http://localhost:5000/api/auth/signup', {
      name,
      email,
      password,
    });
    localStorage.setItem('token', res.data.token);
    setUser(res.data);
  };

  const signin = async (email, password) => {
    const res = await axios.post('http://localhost:5000/api/auth/signin', {
      email,
      password,
    });
    localStorage.setItem('token', res.data.token);
    setUser(res.data);
  };

  const signout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signup, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
};