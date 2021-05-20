import React, { useState, useEffect } from "react";
import axios from "axios";
import { navigate, A } from "hookrouter";

export default function InsuranceDetailsForm() {
  const initForm = {
    insurance_num: "",
    name: "",
    contact_num: "",
    address: "",
    chassis_num: "",
    engine_num: "",
    vehicle_registration_num: "",
    vehicle_type: "",
    fuel_type: "",
    insurance_validity_from: "",
    insurance_validity_to: "",
    date: "",
    time: "",
    place: "",
    heading_place: "",
    engine_num_claim: "",
    chassis_num_claim: "",
    isReported: "false",
    FIR_num: "",
    police_station: "",
  };

  const insuranceData = {
    insurance_num: "",
    name: "",
    contact_num: "",
    address: "",
    chassis_num: "",
    engine_num: "",
    vehicle_registration_num: "",
    vehicle_type: "",
    fuel_type: "",
  };

  const initError = Object.assign({}, initForm);

  const [form, setForm] = useState(initForm);
  const [insuranceDataForm, setInsuranceDataForm] = useState(insuranceData);
  const result = { ...form, ...insuranceDataForm };
  const [error, setError] = useState(initError);

  const optionalFields = ["FIR_num", "police_station"];
  const insuranceNumRelatedFields = Object.keys(insuranceData);

  const validateForm = () => {
    let errors = { ...initError };
    let validForm = true;
    Object.keys(result).forEach((key) => {
      if (result[key] === "" && !optionalFields.includes(key)) {
        validForm = false;
        errors[key] = "This field is required";
      }
      if (result[key] === "" && insuranceNumRelatedFields.includes(key)) {
        validForm = false;
        errors[key] = "Enter a valid Insurance Number";
      }
    });
    if (result["engine_num"] !== result["engine_num_claim"]) {
      validForm = false;
      errors["engine_num"] = "Engine Number mismatch";
    }
    setError(errors);
    return validForm;
  };
  const handleChange = (e) => {
    const { value, name } = e.target;
    const FieldValue = { ...form };
    FieldValue[name] = value;
    setForm(FieldValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      axios
        .post("http://localhost:8000/claim/create_claim", result)
        .then((resp) => {
          setForm(initForm);
          console.log("Sucess");
          navigate("/home");
          window.location.reload();
        })
        .catch(({ response }) => {
          console.log("Err", response);
        });
    }
  };

  const FetchInsuranceData = useEffect(() => {
    axios
      .get(
        `http://localhost:8000/claim/insurance_details?num=${form.insurance_num}`
      )
      .then(({ data }) => {
        if (data) {
          setInsuranceDataForm(data);
        }
      });
    // eslint-disable-next-line
  }, [form.insurance_num]);
  return (
    <div className="w-full m-5">
      <div className=" font-bold text-2xl leading-tight my-5  ">
        Insurance Claim Details Form
      </div>
      <form onSubmit={handleSubmit}>
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
                    value={form.date}
                    onChange={handleChange}
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  <div className="text-xs italic text-red-500">
                    {error.date}
                  </div>
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
                    value={form.time}
                    onChange={handleChange}
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  <div className="text-xs italic text-red-500">
                    {error.time}
                  </div>
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
                    value={form.place}
                    onChange={handleChange}
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  <div className="text-xs italic text-red-500">
                    {error.place}
                  </div>
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
                    value={form.heading_place}
                    onChange={handleChange}
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  <div className="text-xs italic text-red-500">
                    {error.heading_place}
                  </div>
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="engine_num_claim"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Engine Number
                  </label>
                  <input
                    type="text"
                    name="engine_num_claim"
                    id="engine_num_claim"
                    value={form.engine_num_claim}
                    onChange={handleChange}
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  <div className="text-xs italic text-red-500">
                    {error.engine_num_claim}
                  </div>
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="chassis_num_claim"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Chasis Number
                  </label>
                  <input
                    type="text"
                    name="chassis_num_claim"
                    id="chassis_num_claim"
                    value={form.chassis_num_claim}
                    onChange={handleChange}
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  <div className="text-xs italic text-red-500">
                    {error.chassis_num_claim}
                  </div>
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
                      <input
                        type="radio"
                        value="true"
                        name="isReported"
                        checked={form.isReported === "true"}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      Yes
                    </label>
                    <label className="">
                      <input
                        type="radio"
                        value="false"
                        name="isReported"
                        checked={form.isReported === "false"}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      No
                    </label>
                  </div>
                </div>
                {form.isReported === "true" && (
                  <>
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
                        value={form.police_station}
                        onChange={handleChange}
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
                        value={form.FIR_num}
                        onChange={handleChange}
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                      />
                    </div>
                  </>
                )}
              </div>
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
                Add the registered insurance number to auto fill the details
                from database
              </p>
            </div>
            <div className="mt-5 md:mt-0 md:col-span-2">
              <div>
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="insurance_num"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Insurance Number:
                    </label>
                    <div className="flex  items-center border rounded mt-1  focus:outline-none focus:shadow-outline">
                      <input
                        type="text"
                        name="insurance_num"
                        id="insurance_num"
                        value={form.insurance_num}
                        onChange={(e) => [handleChange(e), FetchInsuranceData]}
                        className=" w-full py-2 px-3 appearance-none text-gray-700 leading-tight"
                      />
                    </div>
                    <div className="text-xs italic text-red-500">
                      {error.insurance_num}
                    </div>
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
                      value={insuranceDataForm.name}
                      onChange={handleChange}
                      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <div className="text-xs italic text-red-500">
                      {error.name}
                    </div>
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
                      value={insuranceDataForm.vehicle_registration_num}
                      onChange={handleChange}
                      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <div className="text-xs italic text-red-500">
                      {error.vehicle_registration_num}
                    </div>
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
                      value={insuranceDataForm.engine_num}
                      onChange={handleChange}
                      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <div className="text-xs italic text-red-500">
                      {error.engine_num}
                    </div>
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
                      value={insuranceDataForm.chassis_num}
                      onChange={handleChange}
                      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <div className="text-xs italic text-red-500">
                      {error.chassis_num}
                    </div>
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
                      value={insuranceDataForm.contact_num}
                      onChange={handleChange}
                      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <div className="text-xs italic text-red-500">
                      {error.contact_num}
                    </div>
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
                      value={insuranceDataForm.vehicle_type}
                      onChange={handleChange}
                      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <div className="text-xs italic text-red-500">
                      {error.vehicle_type}
                    </div>
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
                      value={insuranceDataForm.fuel_type}
                      onChange={handleChange}
                      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <div className="text-xs italic text-red-500">
                      {error.fuel_type}
                    </div>
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
                      value={insuranceDataForm.address}
                      onChange={handleChange}
                      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <div className="text-xs italic text-red-500">
                      {error.address}
                    </div>
                  </div>
                </div>
                <button className=" bg-blue-800 p-2 px-4 float-right rounded flex items-center gap-x-1 font-semibold hover:bg-blue-700 text-white mt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    className="bi bi-check-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                  </svg>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
