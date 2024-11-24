import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessege, setErrorMessege] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    // Validate the form fields
    const messege = checkValidData(email.current.value, password.current.value);
    setErrorMessege(messege);

    // Sign In / SignUp
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://wallpapers.com/images/featured/movie-9pvmdtvz4cb0xl37.jpg"
          alt="background"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-85"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Login" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <p className="text-red-500 font-bold text-lg py-2">{errorMessege}</p>
        <button
          className="p-4 my-6 bg-green-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Login" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to WatchWise? Sign Up Now!"
            : "Already have an account? Login Now!"}
        </p>
      </form>
    </div>
  );
};

export default Login;
