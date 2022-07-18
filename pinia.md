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
- Composition API를 기반으로 동작가능
    - vue2에서 사용된 전상태관리 라이브러리 vuex와 달리 state, getter등으로 명시하지않아도 Composition API를 통하여 지정할 수 있다
- **store란?**
    - 컴포넌트 트리구조에 바인딩 되지않은 로직, 상태를 보유한 개체
    - 전역상태를 호스팅


## define
- store를 정의
- 정의 방식
    1. 명시적 정의(options API)
        - 전역상태 관리시 사용되는 요소를 명시
        - vuex에 사용된 전역상태 관리 방식
        ```
        import { defineStore } from 'pinia'

        const useStore = defineStore({
            // 정의한 store의 고유 식별자
            id: 'id',
            // 전역 상태 데이터
            state: () => ({
                sampleState: '',
            }),
            // 상태를 가공하여 내보내는 readonly데이터
            getter: {
                sampleGetter: (state) => { state.sampleState }
            },
            // 전역적 함수, 상태를 가공하는 함수
            action: {
                sampleFunc() {
                    // action내 state에 접근하기위해 this를 사용
                    this.sampleState = 'test';
                }
            } 
        });
        ```
    2. Composition API 사용 정의
        - Composition API를 사용하여 정의
        ```
        import { ref, reactive, computed } from 'vue';
        import { defineStore } from 'pinia';

        const useStore = defineStore('id', () => {
            // 반응성 객체로 선언하지 않을 시 변경감지가 되지않는다.
            const state = reactive({
                sampleState: ''
            });
            // state의 변경을 감지하여, readonly데이터로 내보내기에 computed를 사용
            const sampleGetter = computed(()=>{});

            // 전역적 함수, 상태를 가공하는 함수
            functin sampleFunc() {
                // state의 접근 시 this가 필요없다.
                state.sampleState;
            }

            return { state, sampleGetter, sampleFunc}
        });
        ```
- pinia에서의 store정의 권장방법은 한파일당 하나의 store를 정의하는 것이다.
    - 번들의 코드분할, 타입스크립트의 타입추론등의 자동화를 위하여
    - [참고](https://github.com/vuejs/pinia#create-a-store)

## use
- 정의된 store를 사용
- 정의한 store를 import한뒤 해당 객체를 변수에 담아 사용한다.
    - 해당 객체는 store객체로 랩핑되어있어 구조분해할당을 할 수 없다.
```
import { useStore } from 'store url';

const store = useStore();

store객체를 담은 store를 통하여 store내부 접근

// store내 getters 접근
store.state;
store.sampleGetter;

// store내 action 사용
store.sampleFunc();


```


## state
- store에 정의한 전역상태
- import한 store객체를 통해 접근, 사용이 가능하다.
    ```
    import { useStore } from 'store url';

    const store = useStore();

    // 직접 값을 변경 가능하다.
    store.state.sampleA = value;
    ```
- storeToRefs()
    - store내 선언한 반응성객체를 구조분해할당
    
    ```
    // store 정의
    import { defineStore } from 'pinia';
    import { ref, reactive, computed } from 'vue';

    // option api
    export const useDefaultStore = defineStore({
        id: 'default',
        state: () => ({
            name: 'jaegeun',
            age: 31,
        }),
        getters: {
            greeting: (state) => `my name is ${state.name}, and ${state.age}old`
        }
    });

    // composition api
    export const useArrangeStore = defineStore('arrange', () => {
        const name = ref('jaegeun');
        const age = ref(31);

        const greeting = computed(() => `my name is ${name.value}, and ${age.value}old`);

        return {work, name, age, greeting }
    });
    ```

    ```
    // store 사용
    import { storeToRefs } from 'pinia'
    import { useDefaultStore, useArrangeStore } from '@/stores/sampleStore';

    const defaultStore = useDefaultStore();
    const arrangeStore = useArrangeStore();

    const { name: name1, age: age1, greeting: greeting1 } = storeToRefs(defaultStore);
    const { name: name2, age: age2, greeting: greeting2 } = storeToRefs(arrangeStore);

    // state(reactive내 ref객체), getter(computed ref객체)
    console.log(name1, age1, greeting1);

    // ref객체
    console.log(name2, age2, greeting2);
    ```
- $patch({})
    - 복수의 state요소를 일괄 변경
    ```
    store.$patch({
        sampleA: 'editA',
        sampleB: 'editB'
    })
    ```
- $reset()
    - options API로 정의된 store한정으로 state를 초기화할 수 있다.
    ```
    store.$reset();
    ```

    - tip) composition API로 정의된 경우, 초기값을 정의해둔뒤 action을 통하여 state값을 초기화 할 수 있다.
        - store 정의 
            ```
            import { reactive } from 'vue';
            import { defineStore } from 'pinia';

            const defaultState = {
                sampleStateA: '',
                sampleStateB: '',
            }
            const useStore = defineStore('id', () => {
                const state = reactive({
                    sampleStateA: '',
                    sampleStateB: '',
                });

                functin initState() {
                    state.sampleStateA = defaultState.sampleStateA;
                    state.sampleStateB = defaultState.sampleStateB;
                }

                return { state, sampleFunc}
            });
            ```
        - reset 실행
            ```
            import { useStore } from 'store url';

            const store = useStore();

            store.state.sampleA = 'value';
            // 'value' 
            
            store.initState();

            console.log(store.state.sampleA);
            // ''
            ```


## getter
- store내에서 계산된 값을 반환
- composition API의 경우, 계산요소의 변경을 감지하여 계산된 값을 내보내기에 computed를 사용해서 표현
- getter내에서는 다른 getter를 사용 할 수도 있다.
    ```
    import { reactive } from 'vue';
    import { defineStore } from 'pinia';

    const defaultState = {
        sampleStateA: '',
        sampleStateB: '',
    }
    const useStore = defineStore('id', () => {
        const state = reactive({
            sampleStateA: 1,
            sampleStateB: 2,
        });

        const getter = () => { state.sampleStateA + state.sampleStateB }
    });
    ```


## action
- store내에 위치하는 state를 조작, 전역적으로 다뤄지는 함수를 의미
    ```
    //
    import { reactive } from 'vue';
    import { defineStore } from 'pinia';

    const useStore = defineStore('id', () => {
        const state = reactive({
            sampleStateA: 1,
            sampleStateB: 2,
        });

        function sampleAction() {
            console.log(`currentstate: ${state.sampleStateA} / ${state.sampleStateB}`);
        }
    });
    ```

     ```
    import { useStore } from 'store url';

    const store = useStore();

    store.sampleAction();
    // currentstate: 1 / 2
    ```