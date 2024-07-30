import baseURL from "../Api/baseUrl";

export const useUpdateDate = async (url, params)=> {
    const config = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    }
    const res = await baseURL.patch(url, params, config);
    console.log(res)
    return res;
}