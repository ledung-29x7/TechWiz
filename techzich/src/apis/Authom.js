import axios from "../axios";


// SigUp
export const SignUp = (post) => new Promise(async(resolve, reject) => {
    try {
        const response= await axios.post('auth/signup',post);
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

// Login
export const Login = (post) => new Promise(async(resolve, reject) => {
    try {
        const response = await axios.post('auth/login',post,{
            withCredentials: true,
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

// Log Out
export const LogOut = () => new Promise(async(resolve,reject)=> {
    try {
        const response = await axios({
            url:`auth/logout`,
            method: "post",
            withCredentials: true,
            headers: {
                'Authorization': `Bearer ${ window.sessionStorage.getItem('token')}`
            }
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})