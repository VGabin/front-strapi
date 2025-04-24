'use client';
import { api } from './strapi';
import { getToken } from './auth';

// enregistre l'interceptor uniquement côté client
api.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export async function createArticle(data: {
    author: number;
    title: string;
    pulicationStatus: string;
    content: string;
    coverImage: File | string | null;
  }) {
    data.pulicationStatus = "published";
    
    api.post('/upload', {files : data.coverImage}, {
        headers: { 'Content-Type': 'multipart/form-data' },
      }).then((r) => {
        data.coverImage = r.data[0].id;

        api.post('/articles', {data}, {
            headers: { 'Content-Type': 'multipart/form-data' },
        }).then((r) => {
            return r;
        });
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération de l\'article:', error);
      });
    
  }

export { api as apiClient };
