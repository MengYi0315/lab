import request from "../utils/request";

// Example
export function GET_TestData(payload) {
    return request.get("https://datacenter.taichung.gov.tw/Swagger/OpenData/817083dc-989b-47e8-a8df-2c37213b9484", payload);
};