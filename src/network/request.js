import axios from 'axios'


export function request(config) {
    const instance1 = axios.create({
        baseURL: 'http://localhost:8517/data-source-server/',
        data: {"ds_id": "643686ad6adae64b686b7fd68fe8c9a2"},
        timeout: 5000
    });

    // 拦截器
    instance1.interceptors.request.use(config => {
        console.log(config);
        return config;
    }, error => {
        console.log(error);
    });


    instance1.interceptors.response.use(res => {
        console.log(res);
        return res.data;
    }, error => {
        console.log(error)
    });


    return instance1(config);
}