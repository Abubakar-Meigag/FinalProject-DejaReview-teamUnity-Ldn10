import React from "react";
import ReactDOM from "react-dom/client";
import "./app.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
const redirectUri = window.location.origin;

root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-6she2stklqg8euth.us.auth0.com"
      clientId="XbtWqy8pyx8f2qwOZfTtUmj4lOGspvtc"
      authorizationParams={{ redirect_uri: redirectUri }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
