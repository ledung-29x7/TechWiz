import {ISSHOWINGLOGIN,
        ISSHOWINGSIGNUP,
        ISSHOWINGDELETE,
        ISSHOWINGEDIT,
        IDEDITANDDELETE,
        ISSHOWINGSUCCESS
        } from "./constants";

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

export const ModalDelete = (showDelete) => {
    return {
        type: ISSHOWINGDELETE,
        showDelete
    }
}

export const ModalEdit =  (showEdit) => {
    return{
        type : ISSHOWINGEDIT,
        showEdit
    }
}

export const getId = (id) => {
    return {
        type : IDEDITANDDELETE,
        id
    }
}

// Alart success
export const ModalSuccsessfull = (isSucc) =>{
    return {
        type : ISSHOWINGSUCCESS,
        isSucc
    }
}