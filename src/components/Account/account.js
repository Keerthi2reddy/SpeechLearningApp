import React, { useState } from "react";
import "./account.css";

export default function Account() {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="account-container container">
      <div className="account-form-container">
        {isSignUp ? (
          <SignUpForm toggleForm={toggleForm} />
        ) : (
          <SignInForm toggleForm={toggleForm} />
        )}
      </div>
    </div>
  );
}

function SignInForm({ toggleForm }) {
  const [signInData, setSignInData] = useState({ email: "", password: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSignInData({ ...signInData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign In Data:", signInData);
  };

  return (
    <form className="account-form" onSubmit={handleSubmit}>
      <h2>Sign In</h2>
      <input className="account-input"
        type="email"
        name="email"
        placeholder="Email"
        value={signInData.email}
        onChange={handleInputChange}
        required
      />
      <input className="account-input"
        type="password"
        name="password"
        placeholder="Password"
        value={signInData.password}
        onChange={handleInputChange}
        required
      />
      <button className="account-button" type="submit">Sign In</button>
      <p>
        Don't have an account? <span onClick={toggleForm}>Sign Up</span>
      </p>
    </form>
  );
}

function SignUpForm({ toggleForm }) {
  const [signUpData, setSignUpData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSignUpData({ ...signUpData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign Up Data:", signUpData);
  };

  return (
    <form className="account-form" onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <input
        className="account-input"
        type="text"
        name="name"
        placeholder="Full Name"
        value={signUpData.name}
        onChange={handleInputChange}
        required
      />
      <input
        className="account-input"
        type="email"
        name="email"
        placeholder="Email"
        value={signUpData.email}
        onChange={handleInputChange}
        required
      />
      <input
        className="account-input"
        type="password"
        name="password"
        placeholder="Password"
        value={signUpData.password}
        onChange={handleInputChange}
        required
      />
      <button className="account-button" type="submit">Sign Up</button>
      <p>
        Already have an account? <span className="account-span" onClick={toggleForm}>Sign In</span>
      </p>
    </form>
  );
}
