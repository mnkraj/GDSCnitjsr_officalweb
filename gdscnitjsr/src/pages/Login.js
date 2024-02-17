import React, { useState } from "react";
import {Link , useNavigate} from "react-router-dom"
import Spinner from "./Spinner"
const Login = () => {
    const [loading,setLoading] = useState(false)
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate()
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
  
    const response = await fetch("http://localhost:3080/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email : details.email,
        password : details.password
      }),
    })
    const result = await response.json();
  
      if (!result.success) {
        alert(result.message);
        
        setLoading(false)
      }
      else{
         
         console.log(result.email)
         localStorage.setItem("email", result.email);
         alert("Login success")
         navigate("/addevents")
         //console.log("Login success")
         setLoading(false)
      }
  
  };
  return (
    <div>
      {loading && <Spinner />}
      <section className="bg-gray-50 dark:bg-gray-900" style={{ opacity: loading ? 0.3 : 1 }}>
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-black">
                LOGIN
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="20XXXXX@nitjsr.ac.in"
                    required
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                    onChange={handleChange}
                  />
                </div>
                <button
                  type="submit"
                  className={`w-full text-white bg-primary  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800`}
                >
                  LOGIN
                </button>
                <p className="text-sm font-light text-black dark:text-black">
                  New user ?{" "}
                  <Link
                    to="/signup"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Register here
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
