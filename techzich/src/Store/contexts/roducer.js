import { IDEDITANDDELETE, 
        ISSHOWINGDELETE, 
        ISSHOWINGEDIT, 
        ISSHOWINGLOGIN,
        ISSHOWINGSIGNUP, 
        ISSHOWINGSUCCESS } from "../action/constants";

export const initState = {
    isSignUp : false,
    isLogin : false,
    isDelete: false,
    isEdit: false,
    idEND: null,
    isSucces: false
}

function Reducers(state,action) {
    switch (action?.type) {
        case ISSHOWINGLOGIN : // sHOW Modal Login
            return{
                ...state,
                isLogin: action.isShowLog
            }
        case ISSHOWINGSIGNUP : // Show Modal SignUp
            return {
                ...state,
                isSignUp: action.isShowSig
            }
        case ISSHOWINGDELETE:
            return {
                ...state,
                isDelete: action.showDelete
            }
        case ISSHOWINGEDIT:
            return {
                ...state,
                isEdit: action.showEdit
            }
        case IDEDITANDDELETE:
            return {
                ...state,
                idEND: action.id
            }
        case ISSHOWINGSUCCESS:
            return {
                ...state,
                isSucces: action.isSucc
            }
        default:
            return state;
    }
}

export default Reducers;