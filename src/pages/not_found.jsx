import React from "react";
import { Link } from "react-router";
import { Helmet } from "react-helmet-async";
const NotFound = () => (
  <div>
    <Helmet>
      <title>Not Found (404 ) </title>
    </Helmet>
    <div style={{ textAlign: "center", marginTop: "10vh" }}>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/">Go back to Home</Link>
    </div>
  </div>
);

export default NotFound;
