import baseURL from "../Api/baseUrl";

export const useDeleteDataHooks = async (url, params)=> {
    const config = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    }
    const res = await baseURL.delete(url, config, params);
    console.log(res)
    return res;
}