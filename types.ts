
export interface Product {
  id: number;
  title: string;
  price: number;
  originalPrice: number;
  rating: number;
  image: string;
  category: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}
