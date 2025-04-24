"use client";
import { useState, FormEvent } from "react";
import { postComment } from "@/lib/strapi";
import { useRouter } from "next/navigation";
import Button from "./ui/button";  // Assure-toi de l'importation correcte du bouton

export default function CommentForm({ articleId }: { articleId: number }) {
  const [authorName, setAuthorName] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!authorName || !content) return;  // Vérification que tous les champs sont remplis

    setLoading(true);
    try {
      // Effectuer l'envoi du commentaire
      await postComment(articleId, { authorName, content });
      // Réinitialisation du formulaire après envoi
      setAuthorName("");
      setContent("");
      router.refresh();  // Recharger la page après soumission
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-4">
      <h3 className="text-lg font-semibold">Laisser un commentaire</h3>
      <input
        type="text"
        placeholder="Votre nom"
        value={authorName}
        onChange={(e) => setAuthorName(e.target.value)}
        className="w-full border p-2 rounded-lg"
        required
      />
      <textarea
        placeholder="Votre commentaire"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows={4}
        className="w-full border p-2 rounded-lg"
        required
      />
      <Button type="submit" disabled={loading}>
        {loading ? "Envoi..." : "Envoyer"}
      </Button>
    </form>
  );
}
