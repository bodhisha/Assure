import { useRoutes, useRedirect, navigate } from "hookrouter";
import React from "react";
import Pending from "../Components/CompanyDashboard/Pending";
import CompanyNavbar from "../Components/Navbar/CompanyNavbar";
import CompanyDashboard from "../Components/CompanyDashboard/CompanyDashboard";
import UserHistory from "../Components/UserDashboard/UserHistory";
import UserProfile from "../Components/UserDashboard/UserProfile";

const routes = {
  "/dashboard": () => <CompanyDashboard />,
  "/profile": () => <UserProfile />,
  "/history": () => <UserHistory />,
  "/pending": () => <Pending />,
};

const CompanyRouter = () => {
  useRedirect("/", "/dashboard");
  const pages = useRoutes(routes);
  !pages && navigate("/dashboard");
  return (
    <div className="relative md:flex bg-gray-200 min-h-screen">
      <CompanyNavbar />
      {pages}
      {!pages && (
        <div className="flex justify-center py-16">
          Error 404: Page not found
        </div>
      )}
    </div>
  );
};
export default CompanyRouter;
