import { useRoutes, useRedirect, navigate } from "hookrouter";
import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import UserProfile from "../Components/UserProfile";

const routes = {
  "/home": () => <UserProfile />,
};

const PrivateRouter = () => {
  useRedirect("/", "/home");
  const pages = useRoutes(routes);
  !pages && navigate("/");
  return (
    <div className="relative bg-gray-200 min-h-screen">
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
export default PrivateRouter;
