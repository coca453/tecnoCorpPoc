import React from "react";
import { useParams, Navigate } from "react-router-dom";

const TestPage: React.FC = () => {
  const { id } = useParams<{ id?: string }>(); // El parámetro es opcional

  // Si no hay `id`, redirige a `/dashboard`
  if (!id) {
    console.log("entro");

    return <Navigate to="/dashboard" />;
  }

  return (
    <div>
      <h2>Test Page</h2>
      <p>Parameter ID: {id}</p>
    </div>
  );
};

export default TestPage;
