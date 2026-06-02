import React from "react";
import { Button } from "../../../shared/ui/button/Button";

interface CategoryFilterProps {
  currentCategory: string;
  onChangeCategory: (category: string) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  currentCategory,
  onChangeCategory,
}) => {
  const getTabStyle = (isActive: boolean) => ({
    backgroundColor: isActive ? "#ff9233" : "#fff",
    color: isActive ? "#fff" : "#4a3e3d",
    border: isActive ? "1px solid #ff9233" : "1px solid #ffe6d5",
    boxShadow: isActive ? "0 4px 10px rgba(255, 146, 51, 0.3)" : "none",
  });

  return (
    <div style={{ display: "flex", gap: "10px", marginBottom: "25px" }}>
      <Button
        style={getTabStyle(currentCategory === "")}
        onClick={() => onChangeCategory("")}
      >
        Все игрушки
      </Button>
      <Button
        style={getTabStyle(currentCategory === "small")}
        onClick={() => onChangeCategory("small")}
      >
        Для мелких пород
      </Button>
      <Button
        style={getTabStyle(currentCategory === "large")}
        onClick={() => onChangeCategory("large")}
      >
        Для крупных псов
      </Button>
    </div>
  );
};
