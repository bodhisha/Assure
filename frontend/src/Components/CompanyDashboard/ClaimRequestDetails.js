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
    </div>
  );
}
