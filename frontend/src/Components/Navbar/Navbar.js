import React, { useState, useContext } from "react";
import { A, navigate } from "hookrouter";
import { AuthContext } from "../../Context/AuthContext";

export default function Navbar({ menus }) {
  const { user } = useContext(AuthContext);
  const [current_user] = user;
  const [drawer, setDrawer] = useState(false);

  const iconForTitle = (title) => {
    switch (title) {
      case "Profile":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="text-blue-300 mr-3 text-lg group-hover:text-white group-focus:text-blue-300 transition ease-in-out duration-150"
            viewBox="0 0 16 16"
          >
            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
          </svg>
        );
      case "Pending":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="text-blue-300 mr-3 text-lg group-hover:text-white group-focus:text-blue-300 transition ease-in-out duration-150"
            viewBox="0 0 16 16"
          >
            <path d="M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353L11.46.146zM8 4c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995A.905.905 0 0 1 8 4zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
          </svg>
        );
      case "History":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="text-blue-300 mr-3 text-lg group-hover:text-white group-focus:text-blue-300 transition ease-in-out duration-150"
            viewBox="0 0 16 16"
          >
            <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z" />
            <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z" />
            <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z" />
          </svg>
        );
      case "Dashboard":
        return (
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            width="20"
            height="20"
            data-icon="columns"
            className="text-blue-300 mr-3 text-lg group-hover:text-white group-focus:text-blue-300 transition ease-in-out duration-150"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM224 416H64V160h160v256zm224 0H288V160h160v256z"
            ></path>
          </svg>
        );

      default:
        break;
    }
  };

  return (
    <div className="flex">
      <div
        className={
          (!drawer ? "-translate-x-full " : "") +
          "bg-indigo-900 min-h-screen z-20 flex flex-col justify-between text-blue-300 w-64 absolute inset-y-0 left-0 transform  md:relative md:translate-x-0 transition duration-200 ease-in-out"
        }
      >
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
                  key={item.title}
                  href={item.link}
                  className="mt-2 group flex w-full items-center  px-2 py-2 text-base leading-5 font-medium text-blue-300 rounded-md hover:text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-900 transition ease-in-out duration-150"
                >
                  {iconForTitle(item.title)}
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
                  {current_user.name}
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
      {/* Navbar for small screen*/}

      <div className="flex justify-between md:hidden w-full z-10 flex-shrink-0 h-16 bg-white shadow">
        <A href="/" className="flex items-center">
          <img
            className="h-12"
            src="https://user-images.githubusercontent.com/34866653/117874355-7d42eb00-b2be-11eb-82f7-0887aa12be5b.png"
            alt="Assure logo"
          />
        </A>
        <button
          onClick={() => {
            setDrawer(!drawer);
          }}
          className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:bg-gray-100 focus:text-gray-600 md:hidden"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="bars"
            className="text-blue-900 h-6 w-6 svg-inline--fa fa-bars fa-w-14"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
