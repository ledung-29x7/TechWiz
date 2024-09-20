import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../Store/contexts/hook";
import { actions } from "../../Store/action";
import * as apis from "../../apis";
import FormInputUser from "./formInput";

function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [, dispatch] = useStore();
  const navigate = useNavigate();
  const [errors, setErrors] = useState([]);
  const [showError, setShowError] = useState(false);

  // open form SingUp
  function handleSignUp() {
    dispatch(actions.ModalSigUp(true)); // deponsit action = true for form signUp in header
  }

  // write info
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const FetchData = async () => {
      try {
        await apis
          .Login(formData)
          .then((res) => {
            if (res.status === 200) {
              window.sessionStorage.setItem("token", res.data.token);
              localStorage.setItem("nameUser", res.data.username);

              dispatch(actions.ModalLogin(false));
              switch (res.data.role) {
                case "USER":
                  return navigate("/");
                case "MANAGE":
                  return navigate("/manage");
                default:
                  return alert("error");
              }
            } else {
              alert("Login fail");
            }
          })
          .catch((errors) => {
            setErrors("Error Server");
            setShowError(true);
          });
      } catch (error) {
        if (error.response.status === 401) {
          setErrors("username or password is incorrect");
        }
        setShowError(true);
      }
    };
    FetchData();
  };

  return (
    <div className="flex flex-col gap-5 px-8 mx-4 mb-12 mt-0">
      {/* modal header */}
      <div className="auth-form_header">
        <div className="flex justify-between ">
          <h3 className=" text-blue-700 text-3xl font-semibold">Login</h3>
        </div>
      </div>

      {/* input  */}
      <form className="flex flex-col gap-5 " onSubmit={handleSubmit}>
        <div className="">
          <FormInputUser
            icon={"fa-solid fa-user"}
            titleInput={"Username"}
            type={"text"}
            nameInput={"username"}
            placeholder={"username"}
            value={formData.username}
            onChange={handleChange}
            afocus={true}
          />

          <FormInputUser
            icon={"fa-solid fa-lock"}
            titleInput={"Password"}
            type={"password"}
            nameInput={"password"}
            placeholder={"password"}
            value={formData.password}
            onChange={handleChange}
          />

          {showError ? (
            <div className="">
              <span className=" text-xs text-red-500">{errors}</span>
            </div>
          ) : null}
        </div>

        {/* modal footer */}
        <div className="mt-3">
          <button className="border rounded-lg  w-full h-10 font-semibold text-sm bg-blue-600 text-white">
            Login
          </button>
        </div>
        <div className="">
          <span className="text-neutral-500 text-sm">Not registered? </span>
          <span
            className="text-sm text-blue-700 hover:underline cursor-pointer "
            onClick={handleSignUp}
          >
            Create account
          </span>
        </div>
      </form>
    </div>
  );
}

export default Login;
