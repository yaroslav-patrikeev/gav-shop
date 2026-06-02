export interface Product {
  id: string;
  name: string;
  price: number;
  category: "small" | "medium" | "large";
  description: string;
  imageUrl: string;
}
