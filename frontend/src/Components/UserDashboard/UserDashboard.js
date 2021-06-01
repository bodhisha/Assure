import React, { useState } from "react";
import { A } from "hookrouter";
import { Loading } from "../Common/Loader";
import axios from "axios";

export default function UserDashboard() {
  const initImages = {
    front_view: "",
    back_view: "",
    left_view: "",
    right_view: "",
  };

  const [files, setFiles] = useState(initImages);
  const [fakeProbability, setFakeProbability] = useState(initImages);
  const [form, setForm] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFileUpload = (e) => {
    const { name } = e.target;
    const file = e.target.files[0];
    setFiles({ ...files, [name]: file });
  };

  const imageFormData = new FormData();
  if (files) {
    imageFormData.append("front_view", files.front_view);
    imageFormData.append("back_view", files.back_view);
    imageFormData.append("left_view", files.left_view);
    imageFormData.append("right_view", files.right_view);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!loading) {
      setLoading(true);
      axios
        .post("http://localhost:8000/claim/images", imageFormData, {
          headers: {
            accept: "application/json",
            "Content-Type": "multipart/form-data",
          },
        })
        .then((resp) => {
          setForm(resp);
          setLoading(false);
        })
        .catch((error) => {
          if (error.response && error.response.status === 405) {
            setFakeProbability(error.response.data.detail.deepfake_probability);
          }
          setLoading(false);
        });
    }
  };
  console.log(fakeProbability.side_view);
  // console.log(Object.values(fakeProbability));

  const fakeImages = Object.values(fakeProbability)
    .map((probability) => parseFloat(probability) > 70)
    .some((f) => f === true);
  return (
    <div className="w-full m-5">
      <div className="text-blue-900 font-semibold text-lg p-1 pr-2 mb-2">
        {" "}
        Want to get your claim processed quickly? Fill out the details with your
        registered insurance number.
      </div>

      <form
        className="w-full bg-white rounded-lg shadow-sm p-3"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="flex items-center gap-x-2 text-blue-900 font-bold text-md py-2  my-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-exclamation-circle-fill"
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
            className="bi bi-exclamation-circle-fill"
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
            {fakeProbability.front_view && (
              <div className="text-red-500 font-semibold text-sm">
                Percentage of being a deepfake: {fakeProbability.front_view}%
              </div>
            )}
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
            {fakeProbability.back_view && (
              <div className="text-red-500 font-semibold text-sm">
                Percentage of being a deepfake: {fakeProbability.back_view}%
              </div>
            )}
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
            {fakeProbability.left_view && (
              <div className="text-red-500 font-semibold text-sm">
                Percentage of being a deepfake: {fakeProbability.left_view}%
              </div>
            )}
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
            {fakeProbability.right_view && (
              <div className="text-red-500 font-semibold text-sm">
                Percentage of being a deepfake: {fakeProbability.right_view}%
              </div>
            )}
          </div>
          {fakeImages && (
            <div className="bg-gray-100 p-1 rounded-md font-bold text-red-500 flex gap-x-1 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-exclamation-triangle"
                viewBox="0 0 16 16"
              >
                <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z" />
                <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z" />
              </svg>
              <div>
                The Images uploaded has been detected as FAKE. Kindly upload new
                images.
              </div>
            </div>
          )}
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="w-full sm:w-1/3 my-2 flex items-center bg-blue-800 hover:bg-indigo-800 text-white font-bold py-2 px-4 sm:px-3 rounded focus:outline-none focus:shadow-outline"
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
