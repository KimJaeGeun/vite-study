/**
 * 컴포넌트 반환
 * @param {String} file 파일 경로/이름
 * @return 컴포넌트
 */
function getComponent(file) {
    return async () => await import(`../components/${file}.vue`);
}

export { getComponent }