import PublicRouter from "./Router/PublicRouter";
import UserRouter from "./Router/UserRouter";
import CompanyRouter from "./Router/CompanyRouter";

import { ToastContainer } from "react-toastify";
import { injectStyle } from "react-toastify/dist/inject-style";
import { AuthContext } from "./Context/AuthContext";
import { useContext } from "react";

function App() {
  const access = localStorage.getItem("access_token");
  const { user } = useContext(AuthContext);
  const [current_user] = user;
  injectStyle();

  if (!access) return <PublicRouter />;

  return (
    <div>
      {current_user &&
        (current_user.role === "CUSTOMER" ? <UserRouter /> : <CompanyRouter />)}
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
