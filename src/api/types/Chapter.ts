export interface Tome {
  id: number;
  tome_number: string;
  title: string;
  tome_japan_date_publish: string;
  tome_french_date_publish: string;
}

export interface Chapter {
  id: number;
  chapter_number: string;
  title: string;
  description: string;
  tome: Tome;
}