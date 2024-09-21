import axios from "../axios";

export const getUser = (host) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        url: `admin/${host}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${window.sessionStorage.getItem("token")}`,
        },
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

export const editUser = (host, id, put) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        url: `admin/${host}/${id}`,
        data: put,
        method: "put",
        headers: {
          Authorization: `Bearer ${window.sessionStorage.getItem("token")}`,
        },
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

export const Delete = (host) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        url: `${host}`,
        method: "delete",
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${window.sessionStorage.getItem("token")}`,
        },
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
