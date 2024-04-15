import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "../loading/Loading";
import "../footer/footer.css";

function Footer() {
  const { logout, isLoading } = useAuth0();

  const handelLogout = () => {
    logout();
  };

  if (isLoading) {
    return <div>{<Loading />}</div>;
  }

  return (
    <div className="mob-footer">
      <footer className="footer footer-center p-4 font-bold bg-main text-secondary static bottom-0">
        <aside className="">
          <nav className="grid grid-flow-col pb-2 gap-10">
            <ul className="flex gap-10">
              <li className="hover:text-lightBlue hover:underline  duration-500">
                <Link to="/">Dashboard</Link>
              </li>
              <li className="hover:text-lightBlue hover:underline duration-500">
                <Link to="/AllModulesPage">Topics</Link>
              </li>
              <li className="hover:text-lightBlue hover:underline duration-500">
                <Link to="/about">About</Link>
              </li>
              <li
                className="hover:text-lightBlue hover:underline  duration-500 cursor-pointer"
                onClick={handelLogout}
              >
                <h2>Sign Out</h2>
              </li>
            </ul>
          </nav>
          <aside>
            <p>
              Copyright © 2023 - All right reserved by Team Unity in
              CodeYourFuture
            </p>
          </aside>
        </aside>
      </footer>
    </div>
  );
}

export default Footer;
