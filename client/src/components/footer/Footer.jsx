import React from "react";
import { Link } from "react-router-dom";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
// import Loading from "../loading/Loading";
import "../footer/footer.css";

function Footer() {
  const supabase = useSupabaseClient();

  async function signOut() {
    await supabase.auth.signOut();
  }

  return (
    <div className="">
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
                onClick={signOut}
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
