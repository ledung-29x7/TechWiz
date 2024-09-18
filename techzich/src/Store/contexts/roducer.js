import { ISSHOWINGLOGIN,ISSHOWINGSIGNUP } from "../action/constants";

export const initState = {
    isSignUp : false,
    isLogin : false,
}

function Reducers(state,action) {
    switch (action.type) {
        case ISSHOWINGLOGIN : // sHOW Modal Login
            return{
                ...state,
                isLogin: action.isShowLog
            }
        case ISSHOWINGSIGNUP : // Show Modal SignUp
            return {
                ...state,
                isLogin: action.isShowSig
            }
        default:
            return state;
    }
}

export default Reducers;