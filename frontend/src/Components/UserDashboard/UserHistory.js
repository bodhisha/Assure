import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Loading } from "../Common/Loader";
import ClaimsTable from "../CompanyDashboard/ClaimsTable";
import { AuthContext } from "../../Context/AuthContext";

export default function UserHistory() {
  const [loading, setLoading] = useState(false);
  const [claimRequests, setClaimRequests] = useState([]);
  const { token } = useContext(AuthContext);
  const [access] = token;

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:8000/claim/user_claims", {
        headers: {
          Authorization: "Bearer " + access,
        },
      })
      .then((res) => {
        setClaimRequests(res.data);
        setLoading(false);
      })
      .catch(({ response }) => {
        if (response) {
          console.log("Something went Wrong");
        }
        setLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="w-full m-4">
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="text-2xl text-blue-800 font-bold my-5">
            List of all Insurance Claim Requests by User
          </div>
          <div className="flex justify-between gap-x-2 items-center">
            <div className="w-full">
              <ClaimsTable claimRequests={claimRequests} />
            </div>
            {/* <div className="bg-white text-blue-700 w-full">Timeline</div> */}
          </div>
        </>
      )}
    </div>
  );
}
