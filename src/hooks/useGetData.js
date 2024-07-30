import baseURL from "../Api/baseUrl";

export const getDataHooks = async (url, params)=> {
    const config = {
        headers: {
            'Accept-Language': `${localStorage.getItem("lang")}`,
        }
    }

    const res = await baseURL.get(url, config, params);
    return res.data;
}

export const useGetDataToken = async (url, params)=> {
    const config = {
        headers: {
            'Accept-Language': `${localStorage.getItem("lang")}`,
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    }

    const res = await baseURL.get(url, config, params);
    return res.data;
}