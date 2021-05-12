import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
export const AuthContext = createContext();

export const AuthProvider = (props) => {
  const [user, setUser] = useState("");
  const access = localStorage.getItem("access_token");
  useEffect(() => {
    if (access) {
      axios
        .get("http://localhost:8000/user/current_user", {
          headers: {
            Authorization: "Bearer " + access,
          },
        })
        .then((res) => {
          if (res && res.status === 200) {
            setUser(res.data.data);
          }
        });
    }
    // eslint-disable-next-line
  }, []);

  return (
    <AuthContext.Provider value={{ user: [user], token: [access] }}>
      {props.children}
    </AuthContext.Provider>
  );
};
