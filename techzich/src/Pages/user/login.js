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
      await apis
        .Login(formData)
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            window.sessionStorage.setItem("token", res.data.token);
            localStorage.setItem("nameUser", res.data.username);

            dispatch(actions.ModalLogin(false));
            switch (res.data.role) {
              case "ADMIN":
                return navigate("/admin/");
              case "MANAGER":
                return navigate("/manager/myHotels");
              case "CUSTOMER":
                return navigate("/");
              default:
                return alert("loi roi");
            }
          } else {
            alert("dang nhap that bai");
          }
        })
        .catch((errors) => {
          console.log(errors);
        });
    };
    FetchData();
  };

  return (
    <div className="flex flex-col gap-8 px-8 mx-4 mb-12 mt-0">
      {/* modal header */}
      <div className="auth-form_header">
        <div className="flex justify-between ">
          <h3 className=" text-3xl font-semibold">Login</h3>
        </div>
      </div>

      {/* input  */}
      <form className="flex flex-col gap-6 " onSubmit={handleSubmit}>
        <FormInputUser
          icon={"fa-solid fa-user"}
          titleInput={"Username"}
          type={"text"}
          nameInput={"username"}
          placeholder={"username"}
          value={formData.username}
          onChange={handleChange}
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
        {/* modal footer */}
        <div className="">
          <button className="border rounded-lg  w-full h-10 font-semibold text-sm bg-blue-600 text-white">
            Login
          </button>
        </div>
        <div>
          <span className="">
            
          </span>
        </div>
      </form>
    </div>
  );
}

export default Login;
