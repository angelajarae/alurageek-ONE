import axios from "axios";

const productsApi=axios.create({
    baseURL:"http://localhost:3000/products/",
});

export const getAllProducts=()=>productsApi.get("/");
export const postProduct=(product)=>productsApi.post("/",product);
export const deleteProduct=(id)=>productsApi.delete(`/${id}`);