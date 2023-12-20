export interface BrandQuery {
  limit?: number;
  page?: number;
  search?: string;
}

export interface BrandItem {
  _id: string;
  name: string;
  description: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}

export interface BrandsData {
  items: BrandItem[];
  total: number;
  page: number;
  limit: number;
}
