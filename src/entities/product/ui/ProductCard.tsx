import React from "react";
import { type Product } from "../model/types";

interface ProductCardProps {
  product: Product;
  actionSlot?: React.ReactNode;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  actionSlot,
}) => {
  return (
    <div className="product-card">
      <div className="product-card__image-container">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="product-card__image"
        />
      </div>
      <div className="product-card__content">
        <h3>{product.name}</h3>
        <p className="product-card__description">{product.description}</p>
        <div className="product-card__footer">
          <span className="product-card__price">{product.price} ₽</span>
          {actionSlot}
        </div>
      </div>
    </div>
  );
};
