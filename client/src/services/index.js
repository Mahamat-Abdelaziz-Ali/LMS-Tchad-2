import axiosInstance from "@/apio/axiosInstance";

export async function registerService(formData){
    const data = await axiosInstance.post('/auth/register', {
        const data = await axiosInstance.post('/auth/register', {
            ...formData,
            role : 'user'
        })
    })

    return data;
}

export async function loginService(formData) {
    const { data } = await axiosInstance.post("/auth/register", formData);

    return data;
}

export async function checkAuth() {
    const { data } = await axiosInstance.get("/auth/check-auth");

    return data;
}