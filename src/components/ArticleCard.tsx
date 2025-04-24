import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

type CoverImage = {
  url: string;
  alternativeText?: string | null;
  width: number;
  height: number;
};

export interface Article {
  id: number | string;
  title: string;
  slug: string;
  publishedAt?: string;
  coverImage?: CoverImage;
  // ajoute author si tu l’as dans la réponse
}

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  const {
    id,              // ← tu l’as si besoin
    title,
    slug,
    publishedAt,
    coverImage,
  } = article;

  const formattedDate = publishedAt
    ? new Date(publishedAt).toLocaleDateString("fr-FR", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
    : undefined;

  return (
    <Link
      href={`/article/${slug}`}
    >
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

      <div className="bg-white p-4 dark:bg-zinc-900">
        <h2 className="mb-1 line-clamp-2 text-xl font-semibold transition-colors group-hover:underline">
          {title}
        </h2>

        {formattedDate && (
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            {formattedDate}
          </p>
        )}
      </div>
    </Link>
  );
}
