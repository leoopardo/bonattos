export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  colors: string[];
  quantity: number;
  collection: string;
  category: string;
  brand: string;
  gender: string;
  p: boolean;
  m: boolean;
  g: boolean;
  gg: boolean;
}

export interface ProductsData {
  items: Product[];
  total: number;
  page: number;
  limit: number;
}

export interface ProductsQuery {
  limit?: number;
  page?: number;
  category?: string;
  brand?: string;
  collection?: string;
  p?: boolean;
  m?: boolean;
  g?: boolean;
  gg?: boolean;
}
