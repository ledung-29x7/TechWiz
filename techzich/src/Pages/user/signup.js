import FormInputUser from "./formInput";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../Store/contexts/hook";
import { actions } from "../../Store/action";
import * as apis from "../../apis";

function SignUp() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    phone: "",
  });
  const navigate = useNavigate();
  const [errors, setErrors] = useState("");
  const [showError, setShowError] = useState(false);
  const [, dispatch] = useStore();

  // open Form Login
  function handleLogin() {
    dispatch(actions.ModalLogin(true));
  }

  //  write info
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const FetchData = async () => {
      try {
        await apis
          .SignUp(formData)
          .then((res) => {
            console.log(res);
            if (res.errors) {
              setErrors(res.errors);
              alert("Login failed!");
            } else {
              dispatch(actions.ModalSigUp(false));
              dispatch(actions.ModalLogin(true));
              navigate("/");
            }
          })
          .catch((errors) => {
            setErrors(errors);
            setShowError(true);
          });
      } catch (error) {
        if (error.response.status === 401) {
          setErrors("");
        }
        setShowError(true);
      }
    };
    FetchData();
  };

  return (
    <div className="flex flex-col gap-6 px-8 mx-4 mb-8">
      {/* modal header */}
      <div className="">
        <div className="flex justify-between items-center">
          <h3 className=" text-indigo-700 text-2xl font-semibold">Đăng ký</h3>
        </div>
      </div>

      {/* input  */}
      <form className="flex flex-col gap-5 " onSubmit={handleSubmit}>
         <div>
            <FormInputUser
               icon={"fa-solid fa-user"}
               type={"text"}
               nameInput={"username"}
               placeholder={"Email"}
               value={formData.username}
               onChange={handleChange}
               afocus={true}
               titleInput={"Email"}
            />

            <FormInputUser
               icon={"fa-solid fa-lock"}
               type={"password"}
               nameInput={"password"}
               placeholder={"Mật khẩu"}
               value={formData.password}
               onChange={handleChange}
               titleInput={"Mật khẩu"}
            />
            <FormInputUser
               icon={"fa-solid fa-signature"}
               type={"text"}
               nameInput={"firstName"}
               placeholder={"Họ"}
               value={formData.firstName}
               onChange={handleChange}
               titleInput={"Họ"}
            />
            <FormInputUser
               icon={"fa-solid fa-signature"}
               type={"text"}
               nameInput={"lastName"}
               placeholder={"Tên"}
               value={formData.lastName}
               onChange={handleChange}
               titleInput={"Tên"}
            />
            <FormInputUser
               icon={"fa-solid fa-phone"}
               type={"text"}
               nameInput={"phone"}
               placeholder={"Số điện thoại"}
               value={formData.phone}
               onChange={handleChange}
               titleInput={"Số điện thoại"}
            />
         </div>
        {/* modal footer */}
        <div className="mt-2">
          <button className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Đăng ký
          </button>
        </div>

         <div className="text-end">
            <span className="text-xs text-neutral-500">You already have an account? </span>
            <span
               onClick={handleLogin}
               className="text-blue-700 text-xs hover:underline cursor-pointer"
            >
               Login
            </span>
         </div>
      </form>
    </div>
  );
}
export default SignUp;
