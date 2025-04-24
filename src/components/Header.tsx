'use client';
import Link from 'next/link';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';

export default function Header() {
  const { user, logout } = useAuth();

  return (
    <header className="py-4 border-b mb-6">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">Mon Blog</Link>
        {user && (
            <Link href="/new">
                <button className="secondary">Nouvel article</button>
            </Link>
        )}
        {user ? (
          <div className="flex items-center gap-4">
            <span>Bonjour, {user.username}</span>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg" onClick={logout}>Logout</button>
          </div>
        ) : (
          <Link href="/login"><button className="px-4 py-2 bg-blue-600 text-white rounded-lg">Login</button></Link>
        )}
      </div>
    </header>
  );
}
