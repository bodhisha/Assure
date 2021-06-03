import React, { useState, useEffect } from "react";
import axios from "axios";
import { Loading } from "../Common/Loader";
import { A } from "hookrouter";

export default function ClaimReport({ id }) {
  const [loading, setLoading] = useState(false);
  const [claimDetails, setClaimDetails] = useState({});
  console.log(id);

  useEffect(() => {
    setLoading(true);
    console.log("hey");
    axios
      .get(`http://localhost:8000/claim/details?claim_id=${id}`)
      .then((res) => {
        console.log(res.data);
        setClaimDetails(res.data);
        setLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div>
      {Object.keys(claimDetails).length > 0 && (
        <div class="bg-white shadow overflow-hidden sm:rounded-lg">
          <div class="px-4 py-5 sm:px-6">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              Claim Request Details
            </h3>
            <p class="mt-1 max-w-2xl text-sm text-gray-500">
              Personal details and Claim Request Details
            </p>
          </div>
          <div class="border-t border-gray-200 px-4 py-5 sm:px-6">
            <div className="flex items-center gap-x-2 sm:col-span-2 text-lg mb-2 leading-6 font-bold text-blue-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-person-check-fill"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"
                />
                <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              </svg>
              <div>Personal Details</div>
            </div>
            <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
              <div class="sm:col-span-1">
                <dt class="text-sm font-medium text-gray-500">
                  Name of the Insured
                </dt>
                <dd class="mt-1 text-sm text-gray-900">
                  {claimDetails?.claim_details?.name}
                </dd>
              </div>
              <div class="sm:col-span-1">
                <dt class="text-sm font-medium text-gray-500">
                  Contact Number
                </dt>
                <dd class="mt-1 text-sm text-gray-900">
                  {claimDetails?.claim_details?.contact_num}
                </dd>
              </div>
              <div class="sm:col-span-1">
                <dt class="text-sm font-medium text-gray-500">Email address</dt>
                <dd class="mt-1 text-sm text-gray-900">
                  {claimDetails?.claim_details?.email}
                </dd>
              </div>
              <div class="sm:col-span-1">
                <dt class="text-sm font-medium text-gray-500">Address</dt>
                <dd class="mt-1 text-sm text-gray-900">
                  ute sint ,qawg, Keralaa
                </dd>
              </div>
            </dl>
          </div>
          <div class="border-t border-gray-200 px-4 py-5 sm:px-6">
            <div className="flex items-center gap-x-2 sm:col-span-2 text-lg mb-2 leading-6 font-bold text-blue-900">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                width="20"
                height="20"
                data-icon="car"
                class="svg-inline--fa fa-car fa-w-16"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M499.99 176h-59.87l-16.64-41.6C406.38 91.63 365.57 64 319.5 64h-127c-46.06 0-86.88 27.63-103.99 70.4L71.87 176H12.01C4.2 176-1.53 183.34.37 190.91l6 24C7.7 220.25 12.5 224 18.01 224h20.07C24.65 235.73 16 252.78 16 272v48c0 16.12 6.16 30.67 16 41.93V416c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-32h256v32c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-54.07c9.84-11.25 16-25.8 16-41.93v-48c0-19.22-8.65-36.27-22.07-48H494c5.51 0 10.31-3.75 11.64-9.09l6-24c1.89-7.57-3.84-14.91-11.65-14.91zm-352.06-17.83c7.29-18.22 24.94-30.17 44.57-30.17h127c19.63 0 37.28 11.95 44.57 30.17L384 208H128l19.93-49.83zM96 319.8c-19.2 0-32-12.76-32-31.9S76.8 256 96 256s48 28.71 48 47.85-28.8 15.95-48 15.95zm320 0c-19.2 0-48 3.19-48-15.95S396.8 256 416 256s32 12.76 32 31.9-12.8 31.9-32 31.9z"
                ></path>
              </svg>
              <div>Insurance and Vehicle Details</div>
            </div>
            <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
              <div class="sm:col-span-1">
                <dt class="text-sm font-medium text-gray-500">
                  Insurance Number
                </dt>
                <dd class="mt-1 text-sm text-gray-900">
                  {claimDetails.claim_details.insurance_num}
                </dd>
              </div>
              <div class="sm:col-span-1">
                <dt class="text-sm font-medium text-gray-500">Engine Number</dt>
                <dd class="mt-1 text-sm text-gray-900">
                  {claimDetails.claim_details.engine_num}
                </dd>
              </div>
              <div class="sm:col-span-1">
                <dt class="text-sm font-medium text-gray-500">Chasis Number</dt>
                <dd class="mt-1 text-sm text-gray-900">
                  {claimDetails.claim_details.chassis_num}
                </dd>
              </div>
              <div class="sm:col-span-1">
                <dt class="text-sm font-medium text-gray-500">
                  Vehicle Registration Number
                </dt>
                <dd class="mt-1 text-sm text-gray-900">
                  {claimDetails.claim_details.vehicle_registration_num}
                </dd>
              </div>

              <div class="sm:col-span-1">
                <dt class="text-sm font-medium text-gray-500">Vehicle Type</dt>
                <dd class="mt-1 text-sm text-gray-900">
                  {claimDetails.claim_details.vehicle_type}
                </dd>
              </div>
              <div class="sm:col-span-1">
                <dt class="text-sm font-medium text-gray-500">Fuel Type</dt>
                <dd class="mt-1 text-sm text-gray-900">
                  {claimDetails.claim_details.fuel_type}
                </dd>
              </div>

              <div class="sm:col-span-1">
                <dt class="text-sm font-medium text-gray-500">
                  Insurance Validity
                </dt>
                <dd class="mt-1 text-sm text-gray-900">
                  {claimDetails.claim_details.insurance_validity_from} -
                  {claimDetails.claim_details.insurance_validity_to}
                </dd>
              </div>
            </dl>
          </div>
          <div class="border-t border-gray-200 px-4 py-5 sm:px-6">
            <div className="flex items-center gap-x-2 sm:col-span-2 text-lg mb-2 leading-6 font-bold text-blue-900">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                width="20"
                height="20"
                data-icon="car-crash"
                class="svg-inline--fa fa-car-crash fa-w-20"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
              >
                <path
                  fill="currentColor"
                  d="M143.25 220.81l-12.42 46.37c-3.01 11.25-3.63 22.89-2.41 34.39l-35.2 28.98c-6.57 5.41-16.31-.43-14.62-8.77l15.44-76.68c1.06-5.26-2.66-10.28-8-10.79l-77.86-7.55c-8.47-.82-11.23-11.83-4.14-16.54l65.15-43.3c4.46-2.97 5.38-9.15 1.98-13.29L21.46 93.22c-5.41-6.57.43-16.3 8.78-14.62l76.68 15.44c5.26 1.06 10.28-2.66 10.8-8l7.55-77.86c.82-8.48 11.83-11.23 16.55-4.14l43.3 65.14c2.97 4.46 9.15 5.38 13.29 1.98l60.4-49.71c6.57-5.41 16.3.43 14.62 8.77L262.1 86.38c-2.71 3.05-5.43 6.09-7.91 9.4l-32.15 42.97-10.71 14.32c-32.73 8.76-59.18 34.53-68.08 67.74zm494.57 132.51l-12.42 46.36c-3.13 11.68-9.38 21.61-17.55 29.36a66.876 66.876 0 0 1-8.76 7l-13.99 52.23c-1.14 4.27-3.1 8.1-5.65 11.38-7.67 9.84-20.74 14.68-33.54 11.25L515 502.62c-17.07-4.57-27.2-22.12-22.63-39.19l8.28-30.91-247.28-66.26-8.28 30.91c-4.57 17.07-22.12 27.2-39.19 22.63l-30.91-8.28c-12.8-3.43-21.7-14.16-23.42-26.51-.57-4.12-.35-8.42.79-12.68l13.99-52.23a66.62 66.62 0 0 1-4.09-10.45c-3.2-10.79-3.65-22.52-.52-34.2l12.42-46.37c5.31-19.8 19.36-34.83 36.89-42.21a64.336 64.336 0 0 1 18.49-4.72l18.13-24.23 32.15-42.97c3.45-4.61 7.19-8.9 11.2-12.84 8-7.89 17.03-14.44 26.74-19.51 4.86-2.54 9.89-4.71 15.05-6.49 10.33-3.58 21.19-5.63 32.24-6.04 11.05-.41 22.31.82 33.43 3.8l122.68 32.87c11.12 2.98 21.48 7.54 30.85 13.43a111.11 111.11 0 0 1 34.69 34.5c8.82 13.88 14.64 29.84 16.68 46.99l6.36 53.29 3.59 30.05a64.49 64.49 0 0 1 22.74 29.93c4.39 11.88 5.29 25.19 1.75 38.39zM255.58 234.34c-18.55-4.97-34.21 4.04-39.17 22.53-4.96 18.49 4.11 34.12 22.65 39.09 18.55 4.97 45.54 15.51 50.49-2.98 4.96-18.49-15.43-53.67-33.97-58.64zm290.61 28.17l-6.36-53.29c-.58-4.87-1.89-9.53-3.82-13.86-5.8-12.99-17.2-23.01-31.42-26.82l-122.68-32.87a48.008 48.008 0 0 0-50.86 17.61l-32.15 42.97 172 46.08 75.29 20.18zm18.49 54.65c-18.55-4.97-53.8 15.31-58.75 33.79-4.95 18.49 23.69 22.86 42.24 27.83 18.55 4.97 34.21-4.04 39.17-22.53 4.95-18.48-4.11-34.12-22.66-39.09z"
                ></path>
              </svg>
              <div>Accident Details</div>
            </div>
            <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
              <div class="sm:col-span-1">
                <dt class="text-sm font-medium text-gray-500">
                  Date of Accident
                </dt>
                <dd class="mt-1 text-sm text-gray-900">
                  {claimDetails.claim_details.date}
                </dd>
              </div>
              <div class="sm:col-span-1">
                <dt class="text-sm font-medium text-gray-500">
                  Time of Accident
                </dt>
                <dd class="mt-1 text-sm text-gray-900">
                  {claimDetails.claim_details.time}
                </dd>
              </div>
              <div class="sm:col-span-1">
                <dt class="text-sm font-medium text-gray-500">
                  Exact Place Where incident occurred
                </dt>
                <dd class="mt-1 text-sm text-gray-900">
                  {claimDetails.claim_details.place}
                </dd>
              </div>
              <div class="sm:col-span-1">
                <dt class="text-sm font-medium text-gray-500">
                  Place to which the vehicle was heading before incident{" "}
                </dt>
                <dd class="mt-1 text-sm text-gray-900">
                  {claimDetails.claim_details.heading_place}
                </dd>
              </div>
              {claimDetails.claim_details.isReported ? (
                <div>
                  <div class="sm:col-span-1">
                    <dt class="text-sm font-medium text-gray-500">
                      Reported to Police
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900">Yes</dd>
                  </div>
                  <div class="sm:col-span-1">
                    <dt class="text-sm font-medium text-gray-500">
                      Name & Address of the Police Station
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900">
                      {claimDetails.claim_details.police_station}
                    </dd>
                  </div>
                  <div class="sm:col-span-1">
                    <dt class="text-sm font-medium text-gray-500">FIR No</dt>
                    <dd class="mt-1 text-sm text-gray-900">
                      {claimDetails.claim_details.FIR_num}
                    </dd>
                  </div>
                </div>
              ) : (
                <div class="sm:col-span-1">
                  <dt class="text-sm font-medium text-gray-500">
                    Reported to Police
                  </dt>
                  <dd class="mt-1 text-sm text-gray-900 ">No</dd>
                </div>
              )}
            </dl>
          </div>

          <div class="border-t border-gray-200 px-4 py-5 sm:px-6">
            <div className="flex items-center gap-x-2 sm:col-span-2 text-lg mb-2 leading-6 font-bold text-blue-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-clipboard-data"
                viewBox="0 0 16 16"
              >
                <path d="M4 11a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0v-1zm6-4a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0V7zM7 9a1 1 0 0 1 2 0v3a1 1 0 1 1-2 0V9z" />
                <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
              </svg>
              <div>Damage Analysis </div>
            </div>
          </div>
          <div>
            {claimDetails.claim_images.front_view && (
              <div>
                <div className="text-xl flex gap-x-2 items-center text-blue-900 font-semibold mx-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-arrow-up-circle-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z" />
                  </svg>
                  Front View
                </div>
                <img
                  className="w-4/12 mx-auto"
                  alt="front_view"
                  src={claimDetails.claim_images.front_view}
                ></img>
              </div>
            )}
            {claimDetails.claim_images.back_view && (
              <div>
                <div className="text-xl flex gap-x-2 items-center text-blue-900 font-semibold mx-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-arrow-down-circle-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z" />
                  </svg>
                  <div>Back View</div>
                </div>

                <img
                  className="w-4/12 mx-auto"
                  alt="front_view"
                  src={claimDetails.claim_images.back_view}
                ></img>
              </div>
            )}
            {claimDetails.claim_images.back_view && (
              <div>
                <div className="text-xl flex gap-x-2 items-center text-blue-900 font-semibold mx-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-arrow-left-circle-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
                  </svg>
                  <div>Left View</div>
                </div>
                <img
                  className="w-4/12 mx-auto"
                  alt="front_view"
                  src={claimDetails.claim_images.left_view}
                ></img>
              </div>
            )}
            {claimDetails.claim_images.back_view && (
              <div>
                <div className="text-xl flex gap-x-2 items-center text-blue-900 font-semibold mx-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-arrow-right-circle-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                  </svg>
                  <div>Right View</div>
                </div>
                <img
                  className="w-4/12 mx-auto"
                  alt="front_view"
                  src={claimDetails.claim_images.right_view}
                ></img>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
