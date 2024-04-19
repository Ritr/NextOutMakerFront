import { get } from "./request";
export const getCategory = async () => {
    return await get("/api/get/category/all");
}