import client from "../Client";
import type { Chapter } from "../types/Chapter";

export const getChapterById = async (id: number): Promise<Chapter> => {
  const { data } = await client.get<Chapter>(`/chapters/en/${id}`);
  return data;
};