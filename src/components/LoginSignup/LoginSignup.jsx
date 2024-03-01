import styles from "./LoginSignup.module.css";
import user_icon from "../Assests/person.png";
import email_icon from "../Assests/email.png";
import password_icon from "../Assests/password.png";
import { useState } from "react";

const LoginSignup = () => {
  const [action, setAction] = useState("Login");

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.text}>{action}</div>
          <div className={styles.underline}></div>
        </div>
        <div className={styles.inputs}>
          {action === "Login" ? (
            <div></div>
          ) : (
            <div className={styles.input}>
              <img src={user_icon} alt="" />
              <input type="text" placeholder="Name" />
            </div>
          )}

          <div className={styles.input}>
            <img src={email_icon} alt="" />
            <input type="email" placeholder="Email Id" />
          </div>
          <div className={styles.input}>
            <img src={password_icon} alt="" />
            <input type="password" placeholder="Password" />
          </div>
        </div>
        {action === "Sign Up" ? (
          <div></div>
        ) : (
          <div className={styles.forgotPassword}>
            Lost Password?<span>Click Here!</span>
          </div>
        )}

        <div className={styles.submitContainer}>
          <div
            className={action === "Login" ? styles["gray"] : styles["submit"]}
            onClick={() => {
              setAction("Sign Up");
            }}
          >
            Sign Up
          </div>
          <div
            className={action === "Sign Up" ? styles["gray"] : styles["submit"]}
            onClick={() => {
              setAction("Login");
            }}
          >
            Login
          </div>
        </div>
      </div>
    </>
  );
};
export default LoginSignup;
