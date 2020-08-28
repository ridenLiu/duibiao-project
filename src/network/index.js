import {request} from "./request";


request({
    url: 'api/select',
    method: 'post',
    data: {"ds_id": "643686ad6adae64b686b7fd68fe8c9a2"}
}).then(res => {
    console.log(res);
});