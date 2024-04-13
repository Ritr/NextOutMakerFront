import { get } from "./request";
export const getCollection = async () => {
    return await get("/api/get/collection/all");
}