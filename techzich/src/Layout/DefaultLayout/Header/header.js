import Login from "../../../Pages/user/login";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useStore } from "../../../Store/contexts/hook";
import { actions } from "../../../Store/action";
import * as apis from "../../../apis";
import SignUp from "../../../Pages/user/signup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function HeaderUser() {
  const scrooltotop = () => {
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
    <header className="container m-auto flex justify-between items-center h-[96px]">
      <div className="flex items-center gap-24 h-full">
        {/* Logo Section */}
        <div className="h-full">
          <Link className="h-full flex items-center" to={"/"}>
            <div>
              <img
                onClick={scrooltotop}
                className="w-36 h-24"
                src="../logo.png"
                alt="logo"
              />
            </div>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-10 items-center cursor-pointer h-full">
          <Link className="text-xl" to={"/"}>
            Home
          </Link>
          <Link className="text-xl" to={"/contact"}>
            Contact
          </Link>
        </div>
      </div>

      {/* Authentication Section */}
      {isChecking ? (
        <div className="relative">
          <div className="flex justify-center items-center gap-2">
            <button
              onClick={handleHidden}
              className="z-50 text-2xl rounded-full border-2 border-gray-800 w-[2.8rem] h-11 flex items-center justify-center"
            >
              <FontAwesomeIcon icon="fa-regular fa-user" />
            </button>
            <span className="text-slate-600 font-bold">
              {localStorage.getItem("nameUser")}
            </span>
          </div>

          {/* Logout Dropdown */}
          {!isLogout && (
            <ul className="absolute top-full -left-6 cursor-pointer mt-2 h-14 w-28 rounded-lg flex items-center justify-center bg-red-50">
              <li onClick={handleLogout} className="text-red-600">
                <FontAwesomeIcon icon="fa-solid fa-arrow-right-from-bracket" />
                <span className="ml-2">Logout</span>
              </li>
            </ul>
          )}
        </div>
      ) : (
        <div className="flex gap-10 items-center">
          <button
            className="bg-blue-700 px-4 py-2 rounded text-white flex items-center justify-center font-semibold"
            onClick={handleLogin}
          >
            Sign up / Sign in
          </button>
        </div>
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
