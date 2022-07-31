/**
 * @description [ 로그인 ] API 인터페이스
 */

// 로그인 (요청)
export interface reqLogin {
    id: string,
    password: string,
}

// 로그인 (응답)
export interface resLogin {
    userId: string,
    userName: string,
    grade: string,
    authToken: string,
}