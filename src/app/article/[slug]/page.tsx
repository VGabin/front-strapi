import { getArticleBySlug } from '@/lib/strapi';
import CommentList from '@/components/CommentList';
import CommentForm from '@/components/CommentForm';
import Image from "next/image";
import ReactMarkdown from 'react-markdown';

export default async function ArticlePage({ params }) {
  // Récupérer l'article par son slug
  const article = await getArticleBySlug(params.slug);

  // Si l'article n'est pas trouvé ou s'il n'a pas les attributs nécessaires, renvoyer un message 404
  if (!article) {    
    return <p>Article non trouvé</p>;
  }

  // Déstructuration avec vérifications pour s'assurer que les données existent
  const {
    title,
    content,
    publishedAt,
    author,
    coverImage,
    comments,
  } = article;
 

  return (
    <article className="prose max-w-3xl mx-auto">
      {/* Vérification si coverImage existe avant de l'afficher */}
      {coverImage && (
        <Image
          src={process.env.NEXT_PUBLIC_STRAPI_URL + coverImage.url}
          alt={coverImage.alternativeText ?? title}
          width={coverImage.width}
          height={coverImage.height}
          className="h-56 w-full object-cover transition-transform group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 600px"
        />
      )}
      <h1>{title}</h1>

      {/* Vérification de l'auteur et de la date de publication */}
      <p className="text-sm text-gray-500">
        Publié le{' '}
        {publishedAt ? new Date(publishedAt).toLocaleDateString('fr-FR') : 'Date inconnue'}{' '}
        {author?.data?.attributes?.username ? (
          `par ${author.data.attributes.username}`
        ) : (
          'par auteur inconnu'
        )}
      </p>

      <ReactMarkdown>{content}</ReactMarkdown>

      <CommentList comments={comments} />

      <CommentForm articleId={article.id} /> 
    </article>
  );
}
