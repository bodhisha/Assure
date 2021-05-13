import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";

export default function UserProfile() {
  const { user } = useContext(AuthContext);
  const [current_user] = user;
  return (
    <div className="flex-1 p-5">
      <div className="flex items-center py-2  w-full justify-between">
        <div className="flex items-center space-x-3">
          <img
            src={current_user.profile_picture}
            alt="User_pic"
            className="h-16 w-16 rounded-full"
          />
          <div>
            <div className="md:text-2xl text-xl leading-none font-bold text-blue-900">
              {current_user.name}
            </div>
            <div className="text-sm  font-medium text-blue-900">
              {current_user.email}
            </div>
          </div>
        </div>
        <button className="bg-blue-700 text-white p-2 shadow hover:bg-blue-600 rounded-lg">
          Edit Profile
        </button>
      </div>
      <div className="bg-white mt-2 px-4 py-5 sm:px-6 max-w-3xl shadow rounded-lg">
        <div className=" pb-2 font-semibold border-b border-gray-200 ">
          Personal Details
        </div>
        <dl className="grid grid-cols-1 pt-2 gap-x-4 gap-y-8 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Full name</dt>
            <dd className="mt-1 text-sm text-gray-900">{current_user.name}</dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Age</dt>
            <dd className="mt-1 text-sm text-gray-900">22</dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Email address</dt>
            <dd className="mt-1 text-sm text-gray-900">{current_user.email}</dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Address</dt>
            <dd className="mt-1 text-sm text-gray-900">3532 Glen Falls Road</dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">
              Contact Number
            </dt>
            <dd className="mt-1 text-sm text-gray-900">+91-865471256</dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">District</dt>
            <dd className="mt-1 text-sm text-gray-900">Kottayam</dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="text-sm font-medium text-gray-500">About</dt>
            <dd className="mt-1 text-sm text-gray-900">
              {current_user.description}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
