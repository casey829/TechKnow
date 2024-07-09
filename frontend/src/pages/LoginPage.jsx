import React, { useContext, useState } from "react";
import Layout from "../components/Layout";
import { UserContext } from "../services/userContext";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  const { login } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    // Assume a login API call here
    //  const userData = await loginApiCall(email, password);
    if (password) {
      login(password);
    }

    navigate("/quizzes", { replace: true });
  };
  return (
    <Layout>
      <div className="login-form">
        <div className="card">
          <div className="p-6">
            <h4 className="card-title mb-4">Basic Example</h4>

            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <label
                  htmlFor="exampleInputEmail1"
                  className="text-gray-800 text-sm font-medium inline-block mb-2"
                >
                  Email address
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-input"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
                <small
                  id="emailHelp"
                  className="form-text text-sm text-slate-700"
                >
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleInputPassword1"
                  className="text-gray-800 text-sm font-medium inline-block mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-input"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
              <div className="flex items-center gap-2 mb-3">
                <input
                  type="checkbox"
                  className="form-checkbox rounded border border-gray-200"
                  id="checkmeout0"
                />
                <label
                  className="text-gray-800 text-sm font-medium inline-block"
                  htmlFor="checkmeout0"
                >
                  Check me out !
                </label>
              </div>
              <button type="submit" className="btn bg-primary text-white">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default LoginPage;
