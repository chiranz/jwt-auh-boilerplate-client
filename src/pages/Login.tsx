import React, { useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { useLoginMutation } from "../generated/graphql";
import { setAccessToken } from "../accessToken";

export const Login: React.FC<RouteComponentProps> = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login] = useLoginMutation();
  const resetFields = () => {
    setEmail("");
    setPassword("");
    return;
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const response = await login({
      variables: {
        email,
        password
      }
    });
    if (response && response.data) {
      setAccessToken(response.data.login.accessToken);
    }
    resetFields();
    history.push("/");
  };
  return (
    <div>
      Login Page
      <form>
        <div className="form-group">
          <span>Email</span>

          <input
            type="email"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <span>Password</span>
          <input
            type="password"
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>

        <button onClick={handleSubmit}>Login</button>
      </form>
    </div>
  );
};
