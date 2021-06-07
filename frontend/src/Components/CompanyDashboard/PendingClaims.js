import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Loading } from "../Common/Loader";
import ClaimsTable from "./ClaimsTable";

export default function PendingClaims() {
  const [loading, setLoading] = useState(false);
  const [pendingClaimRequests, setPendingClaimRequests] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:8000/claim/pending_claim_review")
      .then((res) => {
        setPendingClaimRequests(res.data);
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
            List of all Insurance Claim Requests
          </div>
          <ClaimsTable claimRequests={pendingClaimRequests} />
        </>
      )}
    </div>
  );
}
