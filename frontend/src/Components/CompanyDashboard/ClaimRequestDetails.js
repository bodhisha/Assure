import React, { useState } from "react";
import ClaimReport from "../UserDashboard/ClaimReport";

export default function ClaimRequestDetails({ id }) {
  console.log("hey", id);
  const [form, setForm] = useState("");
  const handleChange = (e) => {
    const { value, name } = e.target;
    const FieldValue = { ...form };
    FieldValue[name] = value;
    setForm(FieldValue);
  };
  const OPTIONS = [{ text: "Approve" }, { text: "Reject" }];

  return (
    <div className="m-5">
      <ClaimReport />
      <div className="flex items-center gap-x-2 sm:col-span-2 text-lg my-2 mx-2 leading-6 font-bold text-blue-900">
        Claim Report Review{" "}
      </div>
      <form className="bg-white rounded-lg p-2 max-w-3xl ">
        <div className="flex items-center m-2 justify-between">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="cost"
          >
            Estimated Cost
          </label>
          <input
            name="cost"
            value=""
            type="text"
            onChange={handleChange}
            className=" border rounded w-1/3 py-2 px-3 text-gray-700 bg-gray-50 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter the estimated cost for the insurance"
          />
        </div>
        <div className="flex items-center  m-2 justify-between">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="cost"
          >
            Comments/ Details
          </label>
          <input
            name="cost"
            value=""
            type="text"
            onChange={handleChange}
            className=" border rounded w-1/3 py-2 px-3 text-gray-700 bg-gray-50 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter the estimated cost for the insurance"
          />
        </div>
        <div className="flex items-center m-2 justify-between">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="cost"
          >
            Estimated Cost
          </label>
          <input
            name="cost"
            value=""
            type="text"
            onChange={handleChange}
            className=" border rounded w-1/3 py-2 px-3 text-gray-700 bg-gray-50 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter the estimated cost "
          />
        </div>
        <div className="relative">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="cost"
          >
            Estimated Cost
          </label>
          <select
            className=""
            name="role"
            value={form.role}
            onChange={handleChange}
          >
            {OPTIONS.map((item) => (
              <option value={item.type} key={item.type}>
                {item.text}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </form>
    </div>
  );
}
