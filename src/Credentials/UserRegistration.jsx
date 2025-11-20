import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./Credentials.module.css";

const UserRegistration = () => {
  const generateMusicRain = () => {};
  const navigate = useNavigate();
  const path = useLocation();
  const from = path.state;
  // console.log(from.from);

  const [formData, setFormData] = useState({
    userName: null,
    email: null,
    password: null,
  });

  const [showAppName, setShowAppName] = useState(false);

  const validateData = (e) => {
    e.preventDefault();

    const userName = formData.userName,
      email = formData.email,
      password = formData.password;

    if (userName === undefined || userName === null) {
      alert(" userName shouldn't null!");
      return;
    }

    if (email === undefined || email === null) {
      alert(" Email shouldn't null!");
      return;
    }
    if (password === undefined || password === null) {
      alert(" password shouldn't null!");
      return;
    }
    if (from.from === "signup") storeUserData();
    else AuthenticateUser();
  };
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const AuthenticateUser = async () => {
    alert();
    try {
      const response = await fetch("http://localhost:1005/authenticateUser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log(response.body);
        navigate("/homePage");
        localStorage.setItem("name", formData["userName"]);
      }
      const res = response.text();
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  const storeUserData = async () => {
    try {
      const response = await fetch("http://localhost:1005/process-data", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log(response.body);

        navigate("/homePage");
        localStorage.setItem("name", formData["userName"]);
      }
    } catch (er) {
      console.log(er);
      alert("Check your network");
    }
  };

  return (
    <div
      className={`${styles.container}  w-full h-screen bg-cover bg-center flex justify-center items-center `}
    >
      <div className="grid sm:grid-cols-1 md:grid-cols-1  lg:grid-cols-1   ">
        <div className=" lg:ml-30 xl:ml-60 md:ml-25 sm:ml-23 mb-10 text-3xl text-white ">
          {" "}
          <a
            href="#login"
            className={`hover:text-blue-300`}
            onMouseOut={() => setShowAppName("hidden")}
          >
            {from.from}
            <span className={` ${showAppName ? "block" : "hidden"} `}>
              to Arunofyit
            </span>
          </a>
        </div>
        <div
          className=" md:border border-white  text-white pb-10 pr-10 rounded-md  "
          style={{
            backgroundColor: "rgba(255,255,255,0.2)",
            backdropFilter: "blur(5px)",
            boxShadow: "0px 8px 32px rgba(255,255,255,0.3)",
            border: "2px solid rgba(255,255,255,0.2)",
            borderRadius: "10px",
          }}
        >
          <form className={`form justify-items-center  mt-15  `} id="login">
            <div className="mx-10 grid xl:grid-cols-2 ">
              <label htmlFor="email" className="p-3 cursor-pointer">
                Email
              </label>
              <input
                type="email"
                className="border border-white rounded-md p-3 focus:ring-1 focus:ring-white focus:outline-0  "
                placeholder="Enter your email"
                id="email"
                name="email"
                onChange={handleChange}
              />
            </div>
            <br />
            <div className="mx-10  grid xl:grid-cols-2">
              <label htmlFor="username" className="p-3 cursor-pointer">
                Username
              </label>
              <input
                type="name"
                className="border border-white rounded-md p-3 focus:outline-0 focus:ring-1 focus:ring-white"
                placeholder="Enter your name"
                id="username"
                onChange={handleChange}
                name="userName"
              />
            </div>
            <br />
            <div className="mx-10  grid xl:grid-cols-2">
              <label htmlFor="password" className="p-3 cursor-pointer">
                Password{" "}
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="border border-white rounded-md p-3 text-md focus:ring-1 focus:outline-0 focus:ring-white"
                id="password"
                onChange={handleChange}
                name="password"
              />
            </div>
            <br />
            <div className="mx-10  grid ">
              <button
                type="submit "
                className="cursor-pointer p-2 mt-1 active:ring-1 rounded border border-white hover:bg-slate-400/50"
                onClick={validateData}
              >
                Submit{" "}
              </button>
            </div>
            {/* <p className="text-center mt-5 ml-10  text-purple-300 hover:text-red-500 cursor-pointer">
              <span className="text-green-300">Already have an account?</span>{" "}
              <a href="http://localhost:1005/login ">Click Here to Login</a>
            </p> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserRegistration;
