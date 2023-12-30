import React, { useState, useEffect } from "react";
import "../styles/ca-form.css";
import { useNavigate } from "react-router-dom";

const CreateAccount = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [alert, setAlert] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (alert) {
      const timer = setTimeout(() => {
        setAlert('');
      }, 2500); // 2.5 seconds
      return () => clearTimeout(timer);
    }
  }, [alert]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      console.error("Passwords do not match!");
      return;
    }

    const userCredentials = {
      username,
      email,
      password,
    };

    try {
      const response = await fetch("http://localhost:8080/api/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userCredentials),
      });

      if (response.ok) {
        console.log("Account Created Successfully", userCredentials);
        navigate('/login');
      } else {
        const errorMsg = await response.text();
        setAlert(errorMsg);
        console.error("Some error");
      }
    } catch (error) {
      console.error("Failed to create an account:", error.message);
    }
  };

  return (
    <div className="create-account-container">
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label>Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button type="submit">Create Account</button>
        {alert && <div className="alert">{alert}</div>} {/* Display alert message */}
      </form>
    </div>
  );
};

export default CreateAccount;
