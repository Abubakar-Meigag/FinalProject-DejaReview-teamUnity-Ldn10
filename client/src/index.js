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
      domain="dev-pboa70gjrbjoz4ab.us.auth0.com"
      clientId="afocggEWJPp2Hg4ufUBxwcH57PfgOla1"
      authorizationParams={{ redirect_uri: redirectUri }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
