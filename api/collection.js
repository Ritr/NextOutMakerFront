import { get } from "./request";
export const getCollection = async () => {
    return await get("/api/get/collection/all");
}

export const getProductsByCollection = async (id) => {
    return await get(`/api/get/collection/product/all/${id}`);
};