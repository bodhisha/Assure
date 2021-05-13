import { useRoutes, useRedirect, navigate } from "hookrouter";
import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import UserDashboard from "../Components/UserDashboard/UserDashboard";
import UserHistory from "../Components/UserDashboard/UserHistory";
import UserProfile from "../Components/UserDashboard/UserProfile";

const routes = {
  "/dashboard": () => <UserDashboard />,
  "/profile": () => <UserProfile />,
  "/history": () => <UserHistory />,
};

const UserRouter = () => {
  useRedirect("/", "/dashboard");
  const pages = useRoutes(routes);
  !pages && navigate("/");
  return (
    <div className="relative md:flex bg-gray-200 min-h-screen">
      <Navbar />
      {pages}
      {!pages && (
        <div className="flex justify-center py-16">
          Error 404: Page not found
        </div>
      )}
    </div>
  );
};
export default UserRouter;
