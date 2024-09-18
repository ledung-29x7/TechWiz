import { ISSHOWINGLOGIN, ISSHOWINGSIGNUP } from "./constants";

export const ModalLogin = (isShowSig) => {
    return{
        type:ISSHOWINGLOGIN,
        isShowSig
    }
}

export const ModalSigUp = (isShowLog) => {
    return {
        type: ISSHOWINGSIGNUP,
        isShowLog
    }
}