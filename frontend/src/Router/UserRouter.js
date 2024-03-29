import { useRoutes, useRedirect, navigate } from "hookrouter";
import React from "react";
import UserNavbar from "../Components/Navbar/UserNavbar";
import UserDashboard from "../Components/UserDashboard/UserDashboard";
import UserHistory from "../Components/UserDashboard/UserHistory";
import UserProfile from "../Components/UserDashboard/UserProfile";
import InsuranceDetailsForm from "../Components/UserDashboard/InsuranceDetailsForm";
import ClaimRequestDetails from "../Components/CompanyDashboard/ClaimRequestDetails";

const routes = {
  "/dashboard": () => <UserDashboard />,
  "/profile": () => <UserProfile />,
  "/history": () => <UserHistory />,
  "/claimInsurance": () => <InsuranceDetailsForm />,
  "/claims/:id": ({ id }) => <ClaimRequestDetails id={id} />,
};

const UserRouter = () => {
  useRedirect("/", "/dashboard");
  const pages = useRoutes(routes);
  !pages && navigate("/");
  return (
    <div className="relative md:flex bg-gray-100 min-h-screen">
      <UserNavbar />
      {!pages && <div>bla</div>}
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
