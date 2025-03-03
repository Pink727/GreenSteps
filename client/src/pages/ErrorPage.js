import React from "react";
import './ErrorPage.css';

const ErrorPage = function() {
  return React.createElement(
    "section",
    null,
    React.createElement("h1", null, "404: Page Not Found"),
    React.createElement("h1", null, "¯\\_(ツ)_/¯")
  );
};

export default ErrorPage;
  