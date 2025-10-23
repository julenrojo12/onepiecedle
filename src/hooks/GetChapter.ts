// src/hooks/useChapter.ts
import { useQuery } from "@tanstack/react-query";
import { getChapterById } from "../api/services/OnePieceAPIService";
import type { Chapter } from "../api/types/Chapter";

export const getChapter = (id: number) => {
  return useQuery<Chapter, Error>({
    queryKey: ["chapter", id],
    queryFn: () => getChapterById(id),
    enabled: !!id, // evita llamadas si id es undefined
  });
};
