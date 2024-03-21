import React from "react";
import { FcGoogle } from "react-icons/fc";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
// import Loading from "../loading/Loading";

const Login = () => {
  const supabase = useSupabaseClient();

  async function signIn() {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        scopes: "https://www.googleapis.com/auth/calendar",
      },
    });
  }

  // if (isLoading) {
  //   return <div>{<Loading />}</div>;
  // }

  return (
    <div
      className={`flex justify-end bg-cover bg-center items-center min-h-screen min-w-screen`}
      style={{ backgroundImage: `url('lnd-10-cyf.jpeg')` }}
    >
      <div className="flex justify-center items-center h-24  text-white">
        <div className="flex flex-col items-center justify-center h-screen -left-24 -bottom-16 sticky lg:pr-[11rem] lg:pt-32 light">
          <div className="max-w-md bg-sky-700 text-white rounded-lg w-[26rem] text-center shadow-md p-6 border-solid border-sky-400">
            <h2 className="text-[1.8rem] font-bold mb-4">
                DEJA Review app
            </h2>

            <div className="flex flex-col">
              <span
                placeholder="Enter your email address"
                className="bg-sky-900 text-white border-0 rounded-md p-6 mb-4 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 font-semibold text-[1.1rem] "
              >
                <p>Where you always be reminded</p>
                <p>Where you always can you plan</p>
                <p>Where you always be successful</p>
              </span>

              <button
                className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-3 px-4 rounded-md mt-2 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150 inline-flex gap-5 text-center pl-8"
                onClick={signIn}
              >
                <FcGoogle className="text-3xl bg-gray-100 text-center" />
                SignUp - Login with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
