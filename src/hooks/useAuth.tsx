'use client';
import { createContext, useState, useEffect, useCallback, useContext } from 'react';
import { api } from '@/lib/strapi';
import { getToken, setToken, removeToken } from '@/lib/auth';

interface User {
  id: number;
  username: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  login: (identifier: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const token = getToken();
    if (token) {
      api.get('/users/me')
        .then((r) => setUser(r.data))
        .catch(() => removeToken());
    }
  }, []);

  const login = useCallback(async (identifier: string, password: string) => {
    const { data } = await api.post('/auth/local', { identifier, password });
    setToken(data.jwt);
    setUser(data.user);
  }, []);

  const logout = useCallback(() => {
    removeToken();
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
