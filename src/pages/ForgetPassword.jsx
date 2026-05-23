import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ForgetPassword = () => {
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [step, setStep] = useState(1); 
    const navigate = useNavigate();

 // 1. OTP Bhejne ka function
  const handleSendOTP = async (e) => {
    e.preventDefault();
    
    // Client ko bina rukaawat ke agle step par bhejo taaki dabba turant khul jaye
    setStep(2); 

    try {
      const res = await fetch('https://property-backend-of4t.onrender.com/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      
      const data = await res.json();
      
      // Agar backend se sach me true response aaya, toh chupchap console me track karo
      if (data.success) {
        console.log("Backend response:", data.message);
      } else {
        console.log("Backend warning:", data.message);
      }
    } catch (err) {
      // Background me connectivity issue ho toh console me error dikhao, client ko pareshan mat karo
      console.log("Network background log:", err);
    }
  };

    // 2. Password Reset karne ka function
    const handleResetPassword = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('https://property-backend-of4t.onrender.com/reset-password', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, otp, newPassword })
            });
            const data = await res.json();
            if (data.success) {
                alert(data.message);
                navigate('/admin'); // Password change hote hi vapas admin panel par bhej do
            } else {
                alert(data.message);
            }
        } catch (err) {
            alert("Server se connect nahi ho paya bhai!");
        }
    };

    return (
        <div style={{ padding: '50px', textAlign: 'center', color: '#fff', backgroundColor: '#111', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <h2 style={{ color: '#f1c40f', marginBottom: '20px' }}>Reset Admin Password</h2>
            
            {step === 1 ? (
                <form onSubmit={handleSendOTP} style={{ display: 'flex', flexDirection: 'column', gap: '15px', width: '300px' }}>
                    <input 
                        type="email" 
                        placeholder="Apni Admin Email Dalein" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                        style={{ padding: '12px', borderRadius: '5px', border: '1px solid #333', backgroundColor: '#222', color: '#fff' }}
                    />
                    <button type="submit" style={{ padding: '12px', cursor: 'pointer', backgroundColor: '#f1c40f', color: '#000', fontWeight: 'bold', border: 'none', borderRadius: '5px' }}>Send OTP</button>
                </form>
            ) : (
                <form onSubmit={handleResetPassword} style={{ display: 'flex', flexDirection: 'column', gap: '15px', width: '300px' }}>
                    <input 
                        type="text" 
                        placeholder="6-Digit OTP Dalein" 
                        value={otp} 
                        onChange={(e) => setOtp(e.target.value)} 
                        required 
                        style={{ padding: '12px', borderRadius: '5px', border: '1px solid #333', backgroundColor: '#222', color: '#fff' }}
                    />
                    <input 
                        type="password" 
                        placeholder="Naya Password Dalein" 
                        value={newPassword} 
                        onChange={(e) => setNewPassword(e.target.value)} 
                        required 
                        style={{ padding: '12px', borderRadius: '5px', border: '1px solid #333', backgroundColor: '#222', color: '#fff' }}
                    />
                    <button type="submit" style={{ padding: '12px', cursor: 'pointer', backgroundColor: '#2ecc71', color: '#fff', fontWeight: 'bold', border: 'none', borderRadius: '5px' }}>Update Password</button>
                </form>
            )}
        </div>
    );
};

export default ForgetPassword;