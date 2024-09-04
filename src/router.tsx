import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/home/Home";
import DashboardPage from "./Pages/dashboard/dashboard";
import TestPage from "./Pages/dashboard/test/Test";

export const RouterService = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="dashboard" element={<DashboardPage />}>
        {/* Ruta dinámica con parámetro id */}
        <Route path="test/:id?" element={<TestPage />} />
      </Route>
    </Routes>
  );
};
