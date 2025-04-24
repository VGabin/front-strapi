interface CommentListProps {
    comments: any[];
  }
  export default function CommentList({ comments }: CommentListProps) {
    if (!comments.length)
      return <p className="italic text-zinc-500">Aucun commentaire pour le moment.</p>;
    return (
      <ul className="space-y-4 mt-8">
        {comments.map((c) => (
          <li key={c.id} className="border rounded-xl p-4 shadow-sm">
            <p className="font-medium">{c.authorName}</p>
            <p className="text-sm text-zinc-500 mb-2">
              {new Date(c.publishedAt).toLocaleString("fr-FR")}
            </p>
            <p>{c.content}</p>
          </li>
        ))}
      </ul>
    );
  }