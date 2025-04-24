import axios from 'axios';

if (!process.env.NEXT_PUBLIC_STRAPI_URL) {
    console.warn('⚠️ NEXT_PUBLIC_STRAPI_URL manquante');
}

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_STRAPI_URL + "/api",
});

// Helpers
export const getArticles = () =>
  api.get('/articles', {
    params: {
      'filters[pulicationStatus][$eq]': 'published',
      populate: 'coverImage',
    },
  }).then(r => r.data.data);

  export const getArticleBySlug = (slug: string) =>
    api
      .get('/articles', {
        params: {
          'filters[slug][$eq]': slug,
          populate: ['coverImage', 'comments'],
        },
      })
      .then((r) => {
        console.log(r.data); // Vérification de la structure de la réponse
        return r.data.data[0] || null; // Retourne l'article ou null si non trouvé
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération de l\'article:', error);
        return null; // En cas d'erreur de l'API
      });

export const postComment = (articleId: number, body: { authorName: string; content: string }) =>
  api.post('/comments', { data: { ...body, article: articleId } });