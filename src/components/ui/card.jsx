// components/ui/card.js
import React from "react";

export const Card = ({ children, className = "" }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md ${className}`}>
      {children}
    </div>
  );
};

export const CardHeader = ({ children, className = "" }) => {
  return <div className={`p-4 border-b ${className}`}>{children}</div>;
};

export const CardTitle = ({ children, className = "" }) => {
  return <h2 className={`text-lg font-medium ${className}`}>{children}</h2>;
};

export const CardContent = ({ children, className = "" }) => {
  return <div className={`p-4 ${className}`}>{children}</div>;
};
