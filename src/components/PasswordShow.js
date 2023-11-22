import React, { useState } from "react";
import "./password.css";
const PasswordShow = () => {
  const [passwordValue, setPasswordValue] = useState(true);

  const passwordShowHandler = (e) => {
    setPasswordValue(!passwordValue);
  };

  return (
    <div className="password-container">
      <label htmlFor="passwordInput">
        {" "}
        Type your password
        <input
          id="passwordInput"
          type={passwordValue ? "password" : "text"}
          placeholder="Type password here"
        />
        <img
          src={passwordValue ? `./close-eye-image.png` : `./open-eye-image.png`}
          alt={passwordValue ? `Close eye image` : `Open eye image`}
          onClick={passwordShowHandler}
        />
      </label>
    </div>
  );
};

export default PasswordShow;
