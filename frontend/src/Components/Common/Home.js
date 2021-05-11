import React, { useState } from "react";
import Login from "../Account/Login";
import Register from "../Account/Register";
export default function Home() {
  const [selection, setSelection] = useState("login");
  return (
    <div className="shadow-xl h-full lg:h-screen">
      <div className="absolute inset-0">
        <img
          className="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1548184274-f1d3776448b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
          alt="People working on laptops"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-gray-900 to-yellow-200"
          style={{ mixBlendMode: "multiply" }}
        ></div>
      </div>
      <div className="flex flex-col sm:flex-row relative items-center h-full  px-4 py-16 sm:px-6 sm:py-24 lg:py-16 lg:px-8">
        <div className="w-full">
          <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            <img
              className="mx-auto"
              src="https://user-images.githubusercontent.com/34866653/117778542-60c19700-b25b-11eb-83c0-3d0df8086a00.png"
            />
            {/* Link : logomakr.com/8Z8BeB */}
            <span className="block text-3xl font-bold text-white">
              Automated Insurance Claim Platform
            </span>
          </h1>
          <p className="mt-6 max-w-lg mx-auto text-center text-xl italic text-white sm:max-w-3xl">
            Assure is an all-new platform that lets you upload images and videos
            of damaged vehicle and process the insurance claim with ease
          </p>
        </div>
        <div className="w-full">
          {selection === "login" ? (
            <Login
              onToggle={() => {
                setSelection("register");
              }}
            />
          ) : (
            <Register
              onToggle={() => {
                setSelection("login");
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
