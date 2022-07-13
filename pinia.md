# pinia

## 목차

1. [개요](#개요)
2. [define](#define)
3. [use](#use)
4. [state](#state)
5. [getter](#getter)
6. [action](#action)


## 개요
- vue3 공식 전역상태관리 라이브러리
- Composition API를 기반으로 동작
    - vue2에서 사용된 전상태관리 라이브러리 vuex와 달리 state, getter등으로 명시하지않아도 Composition API를 통하여 지정할 수 있다
- **store란?**
    - 컴포넌트 트리구조에 바인딩 되지않은 로직, 상태를 보유한 개체
    - 전역상태를 호스팅


## define
- store를 정의
- 정의 방식
    1. 명시적 정의
        - 전역상태 관리시 사용되는 요소를 명시
        ```
        import { defineStore } from 'pinia'

        const useStore = defineStore({
            id: 'id', // 정의한 store의 고유 식별자
            state: () => ({}), // 전역 상태 데이터
            getter: {}, // 상태를 가공하여 내보내는 readonly데이터
            action: {} // 전역적 함수, 상태를 가공하는 함수
        });
        ```
    2. 함수형 정의
        - 
        ```
        import { ref } from 'vue';
        import { defineStore } from 'pinia';

        const useStore = defineStore('id', () => {
            // 반응성 객체로 선언하지 않을 시 변경감지가 되지않는다.
            const state = ref({});
            const getter = ref({});

            functin actionFunc() {
                // 전역적 함수, 상태를 가공하는 함수
            }

            return { state, getter, actionFunc}
        });
        ```

## use
- 정의된 store를 사용
- 정의한 store를 import한뒤 해당 객체를 변수에 담아 사용한다.
    - 해당 객체는 store객체로 랩핑되어있어 구조분해할당을 할 수 없다.
```
import { useStore } from 'store url';

const store = useStore();

// store내 state, getter 불러오기
store.state;

// 불러온 state에 action의 함수르 ㄹ거치지않고 직접 값을 할당, 수정 할 수 있다.
store.state = something;

store.getter;


```