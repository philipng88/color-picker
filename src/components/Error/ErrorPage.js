import React from "react";
import { Link } from "react-router-dom";
import "./ErrorPage.css";

const ErrorPage = () => {
  return (
    <>
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <h1>404</h1>
          </div>
          <h2>sorry, the page you are looking for can't be found!</h2>
          <Link to="/">
            <span className="arrow"></span>Return To Homepage
          </Link>
        </div>
      </div>
      {/* This template was made by Colorlib (https://colorlib.com) */}
    </>
  );
};

export default ErrorPage;
