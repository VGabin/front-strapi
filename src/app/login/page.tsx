import { getArticles } from '@/lib/strapi';
import ArticleCard from '@/components/ArticleCard';

export default async function Home() {
  const articles = await getArticles();
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {articles.map((a) => (
        <ArticleCard key={a.id} article={a} />
      ))}
    </div>
  );
}
