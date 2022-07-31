import request from '@/plugin/request';
import type { ReqData, ResData } from '@/api/sample/interface';

// get
const getData = async (reqParam: ReqData) => {

    const { aaa, bbb, ccc } = reqParam;

    const url = `/get/data?aaa=${aaa}&bbb=${bbb}&ccc=${ccc}`;

    const response = await request.get<ResData>(url);

    console.log(response);
};

// post
const postData = async (reqBody: ReqData) => {

    const url = '/post/data';

    const response = await request.post<ResData>(url, reqBody);

    console.log(response);
};

// put
const putData = async (reqBody: ReqData) => {

    const url = '/put/data';

    const response = await request.put<ResData>(url, reqBody);

    console.log(response);
};

// delete
const deleteData = async (reqBody: ReqData) => {

    const url = '/delete/data';

    const response = await request.delete<ResData>(url, { data: reqBody }); // [!] delete 요청 방식은 조금 다름

    console.log(response);
};

export {
    getData,
    postData,
    putData,
    deleteData,
};
