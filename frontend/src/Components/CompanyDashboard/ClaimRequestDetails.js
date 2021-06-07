import React, { useState, useEffect, useContext } from "react";
import { navigate } from "hookrouter";
import axios from "axios";
import { Loading } from "../Common/Loader";
import ClaimReport from "../UserDashboard/ClaimReport";
import { OPTIONS } from "../../Common/constants";
import { AuthContext } from "../../Context/AuthContext";

export default function ClaimRequestDetails({ id }) {
  const [loading, setLoading] = useState(false);
  const { user } = useContext(AuthContext);
  const [current_user] = user;
  const initForm = {
    claim_id: id,
    comment: "",
    estimated_cost: "",
    status: OPTIONS[0].text,
  };
  const [form, setForm] = useState(initForm);
  const [reviewPending, setReviewPending] = useState(true);
  const handleChange = (e) => {
    const { value, name } = e.target;
    const FieldValue = { ...form };
    FieldValue[name] = value;
    setForm(FieldValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!loading) {
      setLoading(true);
      axios
        .post("http://localhost:8000/claim/report_review", { ...form })
        .then((resp) => {
          setForm(initForm);
          // toast.success(JSON.stringify(resp.data.message));
          navigate("/home");
          setLoading(false);
        })
        .catch(({ response }) => {
          if (response) {
            console.log("Err", response.data);
          }
          setLoading(false);
        });
    }
  };
  return (
    <div className="m-5">
      {loading ? (
        <Loading />
      ) : (
        <div>
          <ClaimReport id={id} _reviewPending={() => setReviewPending(false)} />
          {reviewPending && current_user.role === "REVIEWER" && (
            <div>
              <div className="flex items-center gap-x-2 sm:col-span-2 text-lg my-2 mx-2 leading-6 font-bold text-blue-900">
                Claim Report Review{" "}
              </div>
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-lg p-2 w-full grid  grid-cols-1 sm:grid-cols-2 "
              >
                <div className=" items-center col-span-2 m-2 justify-between">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="comment"
                  >
                    Comments/ Details
                  </label>
                  <textarea
                    name="comment"
                    value={form.comment}
                    type="text"
                    onChange={handleChange}
                    className=" border rounded w-full py-2 px-3 text-gray-700 bg-gray-50 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter review details and comments"
                  />
                </div>
                <div className="col-span-2 sm:col-span-1 items-center m-2 justify-between">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="cost"
                  >
                    Estimated Cost for Claim
                  </label>
                  <input
                    name="estimated_cost"
                    value={form.estimated_cost}
                    type="text"
                    onChange={handleChange}
                    className=" border rounded w-full sm:w-2/3 py-2 px-3 text-gray-700 bg-gray-50 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter the estimated cost"
                  />
                </div>

                <div className="col-span-2 sm:col-span-1 items-center m-2 justify-between">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="status"
                  >
                    Status of Claim
                  </label>
                  <select
                    className="border rounded w-full sm:w-2/3  py-2 px-3 text-gray-700 bg-gray-50 leading-tight focus:outline-none focus:shadow-outline"
                    name="status"
                    value={form.status}
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
                <button className="bg-blue-800 p-2 col-span-2 sm:col-end-3 my-2 sm:col-span-1 w-full sm:w-2/3 justify-self-end  px-4 float-right rounded flex items-center gap-x-1 font-semibold hover:bg-blue-700 text-white mt-2">
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
                  Update Claim Status
                </button>
              </form>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
