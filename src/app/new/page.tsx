'use client';
import { useState, useEffect, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import { createArticle } from '@/lib/strapi-client';
import { Button } from '@/components/ui/button';

export default function NewArticlePage() {
  const { user } = useAuth();
  const router = useRouter();

  // redirection côté client après le premier render
  useEffect(() => {
    if (!user) router.replace('/login');
  }, [user, router]);

  // si pas connecté, n’affiche rien (le useEffect fera la redirection)
  if (!user) return null;

  /* --- hooks après la condition, ordre stable --- */
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [cover, setCover] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {        
      await createArticle({ title, content, coverImage: cover });
      router.push('/'); // retour accueil
    } catch (err: any) {
      setError('Erreur lors de la création');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-6">Nouvel article</h1>
      {error && <p className="text-red-600 mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Titre"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full border p-2 rounded-lg"
        />
        <textarea
          placeholder="Contenu (Markdown)"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={10}
          required
          className="w-full border p-2 rounded-lg"
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setCover(e.target.files?.[0] ?? null)}
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Envoi…' : 'Publier en brouillon'}
        </button>
      </form>
    </main>
  );
}
