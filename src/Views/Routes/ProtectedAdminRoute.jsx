import React from 'react';
import { Navigate } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { user } = UserAuth();

  if (user ===null || user?.codigo !='258654321') {
    return <Navigate to='/' />;
  }
  return children;
};

export default ProtectedRoute;