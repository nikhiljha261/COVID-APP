import React from "react";
import styles from "./Footer.module.css";
const Footer = () => {
  const onMouseOut = (e) => {
    e.target.style.color = "#cccccc";
  };
  return (
    <React.Fragment>
      <div className={styles.container}>
        <h6
          style={{
            display: "block",
            marginBottom: "0px",
            fontSize: 30,
            marginTop: "40px",
            textAlign: "center",
          }}
        >
          Created  by{" "}
          <a
            href="https://github.com/nikhiljha261/CORONA-TRACKER"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "rgba(0,0,255,0.6)", textDecoration: "none" }}
          >
            Nikhil Jha
          </a>
        </h6>
      </div>
      <div className={styles.container}>
        <h6
          style={{
            display: "block",
            marginBottom: "0px",
            fontSize: 16,
            marginTop: "20px",
            textAlign: "center",
          }}
        >
          Data provided  by{" "}
          <a
            href="https://github.com/mathdroid/covid-19-api"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "rgba(0,0,255,0.6)", textDecoration: "none" }}
          >
            Mathdroid
          </a>
        </h6>
      </div>
    </React.Fragment>
  );
};

export default Footer;
