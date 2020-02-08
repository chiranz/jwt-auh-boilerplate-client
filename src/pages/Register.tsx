import React, { useState } from "react";
import { useRegisterMutation } from "../generated/graphql";
import { RouteComponentProps } from "react-router-dom";

export const Register: React.FC<RouteComponentProps> = ({ history }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [register] = useRegisterMutation();
  const resetFields = () => {
    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    return;
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const response = await register({
      variables: {
        email,
        username,
        password
      }
    });
    console.log(response);
    resetFields();
    history.push("/");
  };

  return (
    <div>
      Register page
      <form>
        <div className="form-group">
          <span>Username</span>
          <input
            type="text"
            name="username"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </div>
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
        <div className="form-group">
          <span>Confirm Password</span>
          <input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
          />
        </div>
        <button onClick={handleSubmit}>Sign Up</button>
      </form>
    </div>
  );
};
