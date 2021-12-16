import axios, {AxiosRequestConfig} from "axios";

const wgBaseUrl=`https://wg-force3-backend.herokuapp.com/api/`

export const instance = axios.create({
    baseURL: wgBaseUrl,
    withCredentials: false,
    /*headers: {"API-KEY": "1507513b-81e2-4247-a472-80db1a3a25c5  "}*/
} as AxiosRequestConfig)
//1507513b-81e2-4247-a472-80db1a3a25c5     patron000 google
//0f0449e0-2e9d-4d6b-b73c-ae7838178e5f     patron  mail
export enum ResultCodeEnum{
    Success = 0,
    Error = 1,
}
export enum ResultCodeForCaptcha{
    CaptchaIsRequired=10
}

export type genRespType<D={},RC={}>={
    resultCode:ResultCodeEnum | RC
    messages: Array<string>
    data: D
}








