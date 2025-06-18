import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({ email: '', password: '' });
  const [error, setError] = useState({});

// From Validation
  const validateForm = () => {
    const newErrors = {};
    if (!data.email.trim()) newErrors.email = 'Please enter your email address';
    else if (!/\S+@\S+\.\S+/.test(data.email)) newErrors.email = 'Enter a valid email format';
    if (!data.password.trim()) newErrors.password = 'Please enter your password';
    setError(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const inputChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
    if (error[name]) setError((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const storedUser = localStorage.getItem('userProfile');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      if (parsedUser.email === data.email && parsedUser.password === data.password) {
        localStorage.setItem('loggedInUser', JSON.stringify(parsedUser));
        // alert('Login successful');
        navigate('/account');
      } else {
        setError({ password: 'Email or password is incorrect' });
      }
    } else {
      setError({ email: 'Account not found. Please sign up first.' });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-[360px] bg-[#F7F8F9] h-[550px] border border-gray-300 p-6">
        <h1 className="text-2xl font-semibold text-[#1D2226] leading-snug mb-1">
          Welcome Back to PopX
        </h1>
        <p className="  text-[#6B7280] mb-6">
          Access your dashboard, manage settings,
          <br />
          and explore features tailored for you.
        </p>

        {/* This is Login form to submit the email and password */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <label className="text-sm text-[#6C25FF] absolute -top-2 left-3 bg-[#F7F8F9] px-1">
              Email address<span className="text-red-500"></span>
            </label>
            <input
              name="email"
              type="email"
              value={data.email}
              onChange={inputChange}
              placeholder="you@example.com"
              className="w-full mt-2 h-[45px] border border-[#E4E7EC] rounded-[6px] p-3 text-sm"
            />
            {error.email && <p className="text-red-500 text-xs mt-1">{error.email}</p>}
          </div>

          <div className="relative">
            <label className="text-sm text-[#6C25FF] absolute -top-2 left-3 bg-[#F7F8F9] px-1">
              Password<span className="text-red-500"></span>
            </label>
            <input
              name="password"
              type="password"
              value={data.password}
              onChange={inputChange}
              placeholder="Your secure password"
              className="w-full mt-2 h-[45px] border border-[#E4E7EC] rounded-[6px] p-3 text-sm"
            />
            {error.password && <p className="text-red-500 text-xs mt-1">{error.password}</p>}
          </div>

          <button
            type="submit"
            className="w-full mt-4 bg-[#cccccc] text-white font-semibold py-2 rounded-md transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;