import React from "react";
import { A } from "hookrouter";

export default function UserDashboard() {
  return (
    <div className="w-full m-5">
      <A
        href="/claimInsurance"
        className="bg-blue-800 font-semibold p-2 rounded text-white"
      >
        Claim Insurance
      </A>
    </div>
  );
}
