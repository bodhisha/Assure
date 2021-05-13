import React from "react";
import Navbar from "./Navbar";

export default function CompanyNavbar() {
  const menus = [
    {
      title: "Dashboard",
      link: "/dashboard",
    },
    {
      title: "Pending Requests",
      link: "/pending",
    },
    {
      title: "History",
      link: "/history",
    },
    {
      title: "Profile",
      link: "/profile",
    },
  ];

  return <Navbar menus={menus} />;
}
