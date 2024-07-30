import baseURL from "../Api/baseUrl";

export const useInsertDataHooks = async (url, params)=> {
    const config = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    }
    const res = await baseURL.post(url, params, config);
    console.log(res)
    return res;
}