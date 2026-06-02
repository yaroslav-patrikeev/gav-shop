import React, { useState } from "react";
import { useGetProductsQuery } from "../../../entities/product/api/productApi";
import { ProductCard } from "../../../entities/product/ui/ProductCard";
import { CategoryFilter } from "../../../features/filterProducts/ui/CategoryFilter";
import { AddToCartButton } from "../../../features/addToCart/ui/AddToCartButton";
export const CatalogPage: React.FC = () => {
  const [category, setCategory] = useState<string>("");
  const { data: products, isLoading } = useGetProductsQuery(
    category || undefined
  );

  return (
    <main style={{ padding: "20px" }}>
      <h2>Каталог игрушек для любимых хвостиков</h2>

      <CategoryFilter
        currentCategory={category}
        onChangeCategory={setCategory}
      />

      {isLoading ? (
        <div>Ищем лучшие игрушки...</div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            gap: "20px",
          }}
        >
          {products?.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              actionSlot={<AddToCartButton product={product} />}
            />
          ))}
        </div>
      )}
    </main>
  );
};
