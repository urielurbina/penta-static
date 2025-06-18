'use client';

import React, { useState, useEffect } from 'react';
import { Button } from './Button';

interface PasswordProtectionProps {
  children: React.ReactNode;
}

const PasswordProtection: React.FC<PasswordProtectionProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Check if user is already authenticated
    const authStatus = localStorage.getItem('coinsa-auth');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 500));

    if (password === 'pentacoinsa') {
      setIsAuthenticated(true);
      localStorage.setItem('coinsa-auth', 'true');
    } else {
      setError('Contraseña incorrecta. Por favor, intenta de nuevo.');
    }

    setIsLoading(false);
  };

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1F5092] to-[#335495] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <img 
            src="/images/penta-logo.svg" 
            alt="PENTA Uniformes" 
            className="mx-auto mb-6 h-16 w-auto"
          />
          <h1 className="text-3xl font-acumin-condensed-bold text-[#1F5092] mb-2">
            PENTA Uniformes
          </h1>
          <p className="text-gray-600 font-acumin-regular">
            Sitio en desarrollo - Acceso restringido
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="password" className="block text-sm font-acumin-semibold text-gray-700 mb-2">
              Contraseña de acceso
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4cb6ef] focus:border-transparent font-acumin-regular"
              placeholder="Ingresa la contraseña"
              required
            />
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          <Button
            type="submit"
            variant="primary"
            size="md"
            className="w-full"
            disabled={isLoading}
          >
            {isLoading ? 'VERIFICANDO...' : 'ACCEDER AL SITIO'}
          </Button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 font-acumin-regular">
            Si necesitas acceso, contacta al administrador del sitio.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PasswordProtection; 