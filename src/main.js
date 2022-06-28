import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App);

// 어플리케이션 내 전역적 에러처리기
app.config.errorHandler = (err, instance, info) => {
    // TODO: 에러발생시 대응
    console.log(err);
}

// 템플릿내 주석처리 삭제
app.config.compilerOptions.comments = true

app.mount('#app')
