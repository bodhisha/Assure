import React from "react";
import Navbar from "./Navbar";

export default function CompanyNavbar() {
  const menus = [
    {
      title: "Dashboard",
      link: "/dashboard",
    },
    {
      title: "Pending",
      link: "/claims/pending",
    },
    {
      title: "Profile",
      link: "/profile",
    },
  ];

  return <Navbar menus={menus} />;
}
