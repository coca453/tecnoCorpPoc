import { Outlet } from "react-router-dom";

export default function DashboardPage() {
  return (
    <div>
      <h1>Hello Pages dashboard</h1>
      <Outlet />
    </div>
  );
}
