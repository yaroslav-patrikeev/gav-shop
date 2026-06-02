import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../entities/cart/model/cartSlice";
import { type Product } from "../../../entities/product/model/types";
import { Button } from "../../../shared/ui/button/Button";

interface AddToCartButtonProps {
  product: Product;
}

export const AddToCartButton: React.FC<AddToCartButtonProps> = ({
  product,
}) => {
  const dispatch = useDispatch();

  return (
    <Button
      onClick={() =>
        dispatch(
          addToCart({
            id: product.id,
            name: product.name,
            price: product.price,
          })
        )
      }
    >
      Купить
    </Button>
  );
};
