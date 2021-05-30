import React, { useState } from "react";
import { A } from "hookrouter";
import { Loading } from "../Common/Loader";
import axios from "axios";

export default function UserDashboard() {
  const [fileInterface, setFile] = useState({ fileUpload: null });

  const [form, setForm] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setFile({
      fileUpload: file,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!loading) {
      setLoading(true);
      var bodyFormData = new FormData();
      if (fileInterface.fileUpload) {
        bodyFormData.append("front_view", fileInterface.fileUpload);
        bodyFormData.append("back_view", fileInterface.fileUpload);
        bodyFormData.append("left_view", fileInterface.fileUpload);
        bodyFormData.append("right_view", fileInterface.fileUpload);
      }
      axios
        .post("http://localhost:8000/claim/images", bodyFormData, {
          headers: {
            accept: "application/json",
            "Content-Type": "multipart/form-data",
          },
        })
        .then((resp) => {
          console.log(resp);
          setForm(resp);
          setLoading(false);
        })
        .catch(({ response }) => {
          if (response) {
            console.log("error");
          }
          setLoading(false);
        });
    }
  };

  return (
    <div className="w-full m-5">
      <div className="text-blue-900   font-semibold text-lg p-1 pr-2 mb-2">
        {" "}
        Want to get your claim processed quickly? Fill out the details with your
        registered insurance number.
      </div>
      <form
        className="max-w-3xl bg-white rounded-lg shadow-sm p-3"
        onSubmit={handleSubmit}
      >
        <div className="flex items-center gap-x-2 text-blue-900 font-bold text-md py-2  my-2">
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
          Complete the online claim insurance form
        </div>
        <A
          href="/claimInsurance"
          className="bg-blue-800 mx-4 hover:bg-indigo-800 font-semibold p-2 rounded text-white"
        >
          Claim Insurance Form
        </A>
        <div className="flex items-center gap-x-2 text-blue-900 py-2 font-bold text-md my-2">
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
        <div className="px-3">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="front_view"
            >
              Front View
            </label>
            <input
              aria-label="front_view"
              name="front_view"
              onChange={handleFileUpload}
              type="file"
              accept="image/*"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="back_view"
            >
              Back View
            </label>
            <input
              aria-label="back_view"
              name="back_view"
              onChange={handleFileUpload}
              type="file"
              accept="image/*"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="left_view"
            >
              Left Side View
            </label>
            <input
              aria-label="left_view"
              name="left_view"
              onChange={handleFileUpload}
              type="file"
              accept="image/*"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="right_view"
            >
              Right Side View
            </label>
            <input
              aria-label="right_view"
              name="right_view"
              onChange={handleFileUpload}
              type="file"
              accept="image/*"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="w-full sm:w-1/3 flex items-center bg-blue-800 hover:bg-indigo-800 text-white font-bold py-2 px-4 sm:px-3 rounded focus:outline-none focus:shadow-outline"
          >
            <svg
              className="h-5 w-5 text-white transition ease-in-out duration-150 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clipRule="evenodd"
              />
            </svg>
            Upload Images
          </button>
        </div>
      </form>
    </div>
  );
}
