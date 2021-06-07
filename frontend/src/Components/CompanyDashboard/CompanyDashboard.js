import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../Context/AuthContext";
import { Loading } from "../Common/Loader";
import { A } from "hookrouter";
import ClaimsTable from "./ClaimsTable";

export default function CompanyDashboard() {
  const { token } = useContext(AuthContext);
  const [access] = token;

  const [loading, setLoading] = useState(false);
  const [claimRequests, setClaimRequests] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:8000/claim/all_claim_requests", {
        headers: {
          Authorization: "Bearer " + access,
        },
      })
      .then((res) => {
        setClaimRequests(res.data);
        setLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="w-full m-4">
      {loading ? (
        <Loading />
      ) : (
        <div>
          <div className="text-2xl text-blue-800 font-bold my-5">
            List of all Insurance Claim Requests
          </div>
          <ClaimsTable claimRequests={claimRequests} />
        </div>
      )}
    </div>
  );
}
