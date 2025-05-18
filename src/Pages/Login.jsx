import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { AuthContext } from "../Layout/AuthProviderComponent";
import { toast, ToastContainer } from "react-toastify";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const navigate = useNavigate();
  const { logIn, googleLogIn, githubLogIn } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    logIn(email, password)
      .then(() => {
        toast.success("Login Successful");

        {location.state && navigate(location.state);}
      })
      .catch((error) => {
        toast.error("invalid-credential");
        console.log(error);
      });
  };

  const handleGoogle = () => {
    googleLogIn()
      .then(() => {
        {location.state && navigate(location.state);}
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGithub = () => {
    githubLogIn()
      .then(() => {
        {location.state && navigate(location.state);}
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <Helmet>
        <title>Nestora | Login</title>
      </Helmet>

      <h1 className="text-4xl font-semibold font-serif">Log In</h1>

      <div className=" bg-base-200 w-full max-w-xl shadow-3xl p-30  mt-4">
        <div className="">
          <form onSubmit={handleLogin} className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              name="email"
              placeholder="Email"
            />
            <label className="label">Password</label>
            <input
              type="password"
              className="input"
              name="password"
              placeholder="Password"
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn bg-green-600 mt-4">Login</button>
            <div className="flex justify-between mt-2">
              <div className="flex items-center gap-4">
                <Link onClick={handleGoogle}>
                  <FaGoogle size={30} color="red"></FaGoogle>
                </Link>
                <Link onClick={handleGithub}>
                  <FaGithub size={30}></FaGithub>
                </Link>
              </div>
              <Link to={"/register"} className="btn btn-link">
                Register
              </Link>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Login;
