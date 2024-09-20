import Home from "../Pages/home/home";
import Login from "../Pages/user/login";
import SignUp from "../Pages/user/signup";
import book_page from "../Pages/home/book_page"
import waiting_page from "../Pages/home/waiting_page"
import contact from "../Pages/home/contact"
const publicRouter = [
    {path:"/", component: Home,layout: null},
    {path:"/signup",component:SignUp,layout:null},
    {path:"/login", component:Login,layout:null},
    {path:"/book_page", component:book_page,layout:null},
    {path:"/waiting", component:waiting_page,layout:null},
    {path:"/contact", component:contact,layout:null}
]

export default publicRouter;