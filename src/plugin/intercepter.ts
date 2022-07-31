import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
// import msgModalStore from '@/stores/msgModalStore';
// import loadingModalStore from '@/stores/loadingModalStore';

// const useMsgModalStore = msgModalStore();
// const useLoadingModalStore = loadingModalStore();

function intercepter (api: AxiosInstance) {
    // [요청] 인터셉터
    api.interceptors.request.use(
        (request: AxiosRequestConfig) => {
            // useLoadingModalStore.setLoading(true);
            return request;
        },
        (error: AxiosError) => {
            // useLoadingModalStore.setLoading(false);
            return Promise.reject(error);
        },
    );

    // [응답] 인터셉터
    api.interceptors.response.use(
        (response: AxiosResponse) => {
            const { success, message, code } = response?.data || {};

            // 응답 성공여부가 실패일 경우
            if (success === 'false') {
                // useMsgModalStore.setMessage(true, message);
            }

            // 응답 코드 유효성 검사
            if (code === '700') {
                // useMsgModalStore.setMessage(true, message);
            }

            // useLoadingModalStore.setLoading(false);
            return response;
        },
        (error: AxiosError) => {
            console.log('error');
            // useLoadingModalStore.setLoading(false);
            return Promise.reject(error);
        },
    );
}

export default intercepter;
