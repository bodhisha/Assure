import { useRoutes, useRedirect, navigate } from "hookrouter";
import React from "react";
import Home from "../Components/Common/Home";

const routes = {
  "/home": () => <Home />,
};

const PublicRouter = () => {
  useRedirect("/", "/home");
  const pages = useRoutes(routes);
  !pages && navigate("/");
  return (
    <div className="relative bg-gray-200 min-h-screen">
      {pages}
      {!pages && (
        <div className="flex justify-center py-16">
          Error 404: Page not found
        </div>
      )}
    </div>
  );
};
export default PublicRouter;
