import React from "react";

export default function InsuranceDetailsForm() {
  const initForm = {
    insurance_num: "",
    name: "",
    vehicle_registration_num: "",
  };

  const initIncidentDetails = {
    date: "",
    time: "",
    place: "",
    heading_place: "",
    isReported: "",
    FIR_num: "",
  };
  return (
    <div className="w-full m-5">
      <div className=" font-bold text-2xl leading-tight my-5  ">
        Insurance Claim Details Form
      </div>
      <div className="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Details of Incident (Accident / Theft)
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Complete the details about the incident
            </p>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form>
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="date"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Date of Incident :
                  </label>
                  <input
                    type="date"
                    name="date"
                    id="date"
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="time"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Time (a.m./p.m.)
                  </label>
                  <input
                    type="text"
                    name="time"
                    id="time"
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="place"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Exact Place Where incident occurred :
                  </label>
                  <input
                    type="text"
                    name="place"
                    id="place"
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="heading_place"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Place to which the vehicle was heading before incident :
                  </label>
                  <input
                    type="text"
                    name="heading_place"
                    id="heading_place"
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="engine_num"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Engine Number
                  </label>
                  <input
                    type="text"
                    name="engine_num"
                    id="engine_num"
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="chassis_num"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Chasis Number
                  </label>
                  <input
                    type="text"
                    name="chassis_num"
                    id="chassis_num"
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="isReported"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Is it reported to the Police
                  </label>
                  <div className="flex gap-x-2">
                    <label className="">
                      <input type="radio" className="mr-2" />
                      Yes
                    </label>
                    <label className="">
                      <input type="radio" className="mr-2" />
                      No
                    </label>
                  </div>
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="police_station"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name & Address of the Police Station
                  </label>
                  <input
                    type="text"
                    name="police_station"
                    id="police_station"
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="FIR_num"
                    className="block text-sm font-medium text-gray-700"
                  >
                    FIR No
                  </label>
                  <input
                    type="text"
                    name="FIR_num"
                    id="FIR_num"
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Insurance Details
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Add the registered insurance number to auto fill the details from
              database
            </p>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form>
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="insurance_num"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Insurance Number:
                  </label>
                  <input
                    type="text"
                    name="insurance_num"
                    id="insurance_num"
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Insured Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="vehicle_registration_num"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Vehicle Registration Number
                  </label>
                  <input
                    type="text"
                    name="vehicle_registration_num"
                    id="vehicle_registration_num"
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="engine_num"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Engine Number
                  </label>
                  <input
                    type="text"
                    name="engine_num"
                    id="engine_num"
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="chassis_num"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Chasis Number
                  </label>
                  <input
                    type="text"
                    name="chassis_num"
                    id="chassis_num"
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="contact_num"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Contact Number
                  </label>
                  <input
                    type="text"
                    name="contact_num"
                    id="contact_num"
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="vehicle_type"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Vehicle Type
                  </label>
                  <input
                    type="text"
                    name="vehicle_type"
                    id="vehicle_type"
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="fuel_type"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Fuel Type
                  </label>
                  <input
                    type="text"
                    name="fuel_type"
                    id="fuel_type"
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="col-span-6">
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Address
                  </label>
                  <textarea
                    type="text"
                    name="address"
                    id="address"
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
              </div>
              <button className=" bg-blue-800 p-2 px-4 float-right rounded flex items-center gap-x-1 font-semibold hover:bg-blue-700 text-white mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  class="bi bi-check-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                </svg>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
