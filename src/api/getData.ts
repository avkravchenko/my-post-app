import instance from "./axiosInstance";

export async function getData(endpoint: string, id?: number) {
  try {
    const response = await instance.get(`/${endpoint}/${id ?? ""}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
