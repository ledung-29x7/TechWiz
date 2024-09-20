import Login from "../../../Pages/user/login";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useStore } from "../../../Store/contexts/hook";
import { actions } from "../../../Store/action";
import * as apis from "../../../apis";
import SignUp from "../../../Pages/user/signup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function HeaderUser() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [isShowingSignUp, setIsShowingSignUp] = useState(false);
  const [isShowingLogin, setIsShowingLogin] = useState(false);
  const [isChecking, setIsChecking] = useState(false);
  const [isLogout, setIsLogout] = useState(true);
  const [state, dispatch] = useStore();
  const { isSignUp, isLogin, checkLogin } = state;

  useEffect(() => {
    checkLoggedIn();
  }, [checkLogin]);

  function deleteCookie(name) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  }

  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
    return null;
  }

  function checkLoggedIn() {
    const token = getCookie("token");
    setIsChecking(!!token);
  }

  function handleLogin() {
    setIsShowingLogin(true);
    dispatch(actions.ModalLogin(true));
  }

  useEffect(() => {
    if (isSignUp) {
      dispatch(actions.ModalLogin(false));
      setIsShowingSignUp(true);
      setIsShowingLogin(false);
    }
  }, [isSignUp]);

  useEffect(() => {
    if (isLogin) {
      dispatch(actions.ModalSigUp(false));
      setIsShowingLogin(true);
      setIsShowingSignUp(false);
    }
  }, [isLogin]);

  const handleLogout = async () => {
    try {
      const res = await apis.LogOut();
      if (res.status === 200) {
        deleteCookie("token");
        checkLoggedIn();
      }
    } catch (error) {
      console.error(error);
    }
  };

  function handleHidden() {
    setIsLogout(!isLogout);
  }

  function handleClose() {
    setIsShowingLogin(false);
    setIsShowingSignUp(false);
  }

  const handleClickOutsideModal = (event) => {
    const overlay = document.getElementById("overlay");
    if (event.target === overlay) {
      handleClose();
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutsideModal);
    return () => window.removeEventListener("click", handleClickOutsideModal);
  }, []);

  return (
    <header className="container mx-auto flex justify-between items-center h-[96px] bg-white shadow-lg p-4">
      {/* Logo Section */}
      <div className="flex items-center flex-1">
        <Link to={"/"} onClick={scrollToTop}>
          {/* <img
            className="w-40 h-auto transition-transform duration-200 hover:scale-105"
            src="../logo.png"
            alt="logo"
          /> */}
          <p className="w-40 h-auto transition-transform duration-200 hover:scale-105 ml-2 text-lg font-semibold">Logo</p>
        </Link>

        {/* Navigation Links */}
        <div className="flex gap-8 ml-8">
          <Link className="text-lg text-gray-800 hover:text-blue-600 transition duration-200" to={"/"}>
            Home
          </Link>
          <Link className="text-lg text-gray-800 hover:text-blue-600 transition duration-200" to={"/contact"}>
            Contact
          </Link>
        </div>
      </div>

      {/* Authentication Section */}
      {isChecking ? (
        <div className="relative flex items-center">
          <button
            onClick={handleHidden}
            className="text-2xl rounded-full border-2 border-gray-800 w-12 h-12 flex items-center justify-center bg-white hover:bg-gray-200 transition duration-200 shadow-md"
          >
            <FontAwesomeIcon icon="fa-regular fa-user" />
          </button>
          <span className="text-gray-800 font-bold ml-2">
            {localStorage.getItem("nameUser")}
          </span>

          {/* Logout Dropdown */}
          {!isLogout && (
            <ul className="absolute top-full left-0 mt-2 w-32 rounded-lg bg-white shadow-lg z-50">
              <li onClick={handleLogout} className="flex items-center px-4 py-2 hover:bg-red-100 transition duration-200 cursor-pointer">
                <FontAwesomeIcon icon="fa-solid fa-arrow-right-from-bracket" className="text-red-600" />
                <span className="ml-2 text-red-600">Logout</span>
              </li>
            </ul>
          )}
        </div>
      ) : (
        <button
          className="bg-blue-700 px-4 py-2 rounded text-white font-semibold hover:bg-blue-600 transition duration-200 shadow-md"
          onClick={handleLogin}
        >
          Sign up / Sign in
        </button>
      )}

      {/* SignUp Modal */}
      {isShowingSignUp && (
        <div className="modal">
          <div className="flex h-full w-full">
            <div id="overlay" className="modal_overlay"></div>
            <div className="modal_body">
              <div className="auth-form">
                <div className="w-full flex justify-end">
                  <span
                    onClick={handleClose}
                    className="w-6 h-6 text-3xl flex justify-center items-center cursor-pointer"
                  >
                    &times;
                  </span>
                </div>
                <SignUp />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Login Modal */}
      {isShowingLogin && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6">
            <div className="flex justify-end">
              <span
                onClick={handleClose}
                className="text-3xl cursor-pointer text-gray-500 hover:text-gray-800"
              >
                &times;
              </span>
            </div>
            <Login />
          </div>
        </div>
      )}
    </header>
  );
}

export default HeaderUser;
