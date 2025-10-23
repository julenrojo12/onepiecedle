// src/pages/ChapterPage.tsx
import { getChapter } from "../hooks/GetChapter";

interface ChapterPageProps {
  id: number;
}

export default function ChapterData({ id }: ChapterPageProps) {
  const { data: chapter, isLoading, error } = getChapter(id);

  if (isLoading) return <p>Cargando capítulo...</p>;
  if (error) return <p>Error al cargar: {error.message}</p>;
  if (!chapter) return <p>No se encontró el capítulo.</p>;

  return (
    <div>
      <h1><strong>Title:</strong> {chapter.title}</h1>
      <p className="mt-4"><strong>Description:</strong> {chapter.description}</p>
    </div>
  );
}
