export interface Book {
  id?: number;
  title: string;
  author: string;
  price: number;
  rating: number;
}

export interface CreateBookDto {
  title: string;
  author: string;
  price: number;
  rating: number;
}

export interface UpdateBookDto {
  title?: string;
  author?: string;
  price?: number;
  rating?: number;
}
