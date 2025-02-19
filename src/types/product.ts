
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  subcategory: string;
}

export interface Category {
  name: string;
  image: string;
  subcategories: {
    name: string;
    description: string;
  }[];
}
