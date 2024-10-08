import LayoutDriver from "../Layout/DefaultLayout/layoutDriver";
import LayoutManage from "../Layout/DefaultLayout/layoutManage";
import Driver from "../Pages/Driver/driver";
import Home from "../Pages/home/home";
import Abulance from "../Pages/manage/abulance";
import DriverProfile from "../Pages/manage/driverProfile";
import EmergencyRequests from "../Pages/manage/emergencyRequests";
import Login from "../Pages/user/login";
import SignUp from "../Pages/user/signup";


const publicRouter = [
    {path:"/", component: Home,layout: null},
    {path:"/signup",component:SignUp,layout:null},
    {path:"/login", component:Login,layout:null},
    {path:"/driver", component: Driver, layout: LayoutDriver},
    {path:"/manage", component: EmergencyRequests,layout: LayoutManage},
    {path:"/manage/abulance", component: Abulance,layout: LayoutManage},
    {path:"/manage/driverprofiles",component: DriverProfile, layout: LayoutManage}
]

export default publicRouter;    