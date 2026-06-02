import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button
      style={{
        padding: "8px 16px",
        borderRadius: "4px",
        cursor: "pointer",
        border: "1px solid #ccc",
      }}
      {...props}
    >
      {children}
    </button>
  );
};
