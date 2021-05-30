import React, { useState } from "react";
import { A } from "hookrouter";

export default function UserDashboard() {
  const [fileInterface, setFile] = useState({ fileUpload: null });

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setFile({
      fileUpload: file,
    });
  };
  return (
    <div className="w-full m-5">
      <div className="text-blue-900   font-semibold text-lg p-1 pr-2 mb-2">
        {" "}
        Want to get your claim processed quickly? Fill out the details with your
        registered insurance number.
      </div>
      <form className="max-w-3xl bg-white rounded-lg shadow-sm p-3">
        <div className="flex items-center gap-x-2 text-blue-900 font-bold text-md my-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-exclamation-circle-fill"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
          </svg>
          Upload the images of damaged vehicle in all the mentioned angles
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="image"
          >
            Front View
          </label>
          <input
            aria-label="profile_picture"
            name="profile_picture"
            onChange={handleFileUpload}
            type="file"
            accept="image/*"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="image"
          >
            Back View
          </label>
          <input
            aria-label="profile_picture"
            name="profile_picture"
            onChange={handleFileUpload}
            type="file"
            accept="image/*"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="image"
          >
            Left Side View
          </label>
          <input
            aria-label="profile_picture"
            name="profile_picture"
            onChange={handleFileUpload}
            type="file"
            accept="image/*"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="image"
          >
            Right Side View
          </label>
          <input
            aria-label="profile_picture"
            name="profile_picture"
            onChange={handleFileUpload}
            type="file"
            accept="image/*"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
      </form>

      <A
        href="/claimInsurance"
        className="bg-blue-800 font-semibold p-2 rounded text-white"
      >
        Claim Insurance Form
      </A>
    </div>
  );
}
