import React from "react";
import Navbar from "./Navbar";

export default function UserNavbar() {
  const menus = [
    {
      title: "Dashboard",
      link: "/dashboard",
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
