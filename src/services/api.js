import request from "../utils/request";

export function GET_Test(payload) {
    return request.get("https://datacenter.taichung.gov.tw/Swagger/OpenData/817083dc-989b-47e8-a8df-2c37213b9484", payload);
};

// 不會用到(應該吧)