import { ISSHOWINGLOGIN, ISSHOWINGSIGNUP } from "./constants";

export const ModalLogin = (isShowLog) => {
    return{
        type:ISSHOWINGLOGIN,
        isShowLog
    }
}

export const ModalSigUp = (isShowSig) => {
    return {
        type: ISSHOWINGSIGNUP,
        isShowSig
    }
}