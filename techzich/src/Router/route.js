import Home from "../Pages/home/home";
import Login from "../Pages/user/login";
import SignUp from "../Pages/user/signup";


const publicRouter = [
    {path:"/", component: Home,layout: null},
    {path:"/signup",component:SignUp,layout:null},
    {path:"/login", component:Login,layout:null}
]

export default publicRouter;