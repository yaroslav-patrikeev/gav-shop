import React from "react";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../../entities/cart/model/cartSlice";

export const Header: React.FC = () => {
  const items = useSelector(selectCartItems);
  const totalCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header
      style={{
        padding: "20px",
        background: "#222",
        color: "#fff",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h1 style={{ margin: 0 }}>🐾 Гав-Шоп</h1>
      <div data-testid="cart-link" style={{ fontSize: "16px" }}>
        Корзина:{" "}
        <span
          data-testid="cart-count"
          style={{ fontWeight: "bold", color: "#ffca28" }}
        >
          {totalCount}
        </span>{" "}
        шт.
      </div>
    </header>
  );
};
