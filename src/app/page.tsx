// src/app/page.tsx
import { getArticles } from '@/lib/strapi';
import ArticleCard from '@/components/ArticleCard';

export default async function Home() {
  const articles = await getArticles();
  return (
    <main className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Articles</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((a: any) => (
          <ArticleCard key={a.id} article={a} />
        ))}
      </div>
    </main>
  );
}
