import React, { useState } from "react";
import { A, navigate } from "hookrouter";

export default function Navbar() {
  let menus = [
    {
      title: "Dashboard",
      link: "/dashboard",
    },
    {
      title: "Profile",
      link: "/profile",
    },
    {
      title: "History",
      link: "/history",
    },
  ];

  return (
    <div className="">
      <div className="bg-indigo-900 min-h-screen flex flex-col justify-between text-blue-300 w-64 ">
        <div className="pt-5 px-4">
          <A href="/dashboard">
            <img
              className="h-14"
              src="https://user-images.githubusercontent.com/34866653/117778542-60c19700-b25b-11eb-83c0-3d0df8086a00.png"
              alt="Assure logo"
            />
          </A>
          <div className="pt-5">
            {menus.map((item) => {
              return (
                <A
                  href={item.link}
                  className="mt-2 group flex w-full items-center  px-2 py-2 text-base leading-5 font-medium text-blue-300 rounded-md hover:text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-900 transition ease-in-out duration-150"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="text-white mr-3 text-lg group-hover:text-blue-300 group-focus:text-blue-300 transition ease-in-out duration-150"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.5 1a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0v-13a.5.5 0 0 1 .5-.5z"
                    />
                    <path d="M3 7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7z" />
                  </svg>
                  {item.title}
                </A>
              );
            })}
          </div>
        </div>
        {/* Signout */}
        <div className="border-t border-blue-700 p-4">
          <A href="/dashboard" className="w-full group block">
            <div className="flex items-center">
              <div className="rounded-full h-8 w-8 flex items-center bg-white justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  fill="currentColor"
                  className="inline-block fas fa-user text-xl text-blue-700 group-hover:text-blue-400"
                  viewBox="0 0 16 16"
                >
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm leading-5 font-medium text-white group-hover:text-blue-100">
                  bodhi
                </p>
                <p
                  onClick={() => {
                    navigate("/login");
                    localStorage.removeItem("access_token");
                    window.location.reload();
                  }}
                  className="text-xs leading-4 font-medium text-blue-300 group-hover:text-blue-100 "
                >
                  Sign Out
                </p>
              </div>
            </div>
          </A>
        </div>
      </div>

      {/* )} */}
      {/* <div className="bg-white w-full shadow md-hidden z-10 h-16">
        <A href="/bla">
          <img
            className="h-14"
            src="https://user-images.githubusercontent.com/34866653/117874355-7d42eb00-b2be-11eb-82f7-0887aa12be5b.png"
            alt="Assure logo"
          />
        </A>
      </div> */}
    </div>
  );
}
