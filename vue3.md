# vue 내장 객체

## ref()
- 단일속성을 가진 반응형 객체
    ```
    <script>
    import {​​​​ ref }​​​​​​​​​​​ from "vue";
    
    const test = ref(0);
    test.value = 0
    </script>
    ```
- DOM, 컴포넌트를 가리키는 속성(vue2에서는 이 특성만이 존재한다)
    ```
    <template>
        <div ref="test">test label</div>
    </template>
    
    <script>
    import { ref, onMounted } from "vue";
    import reactiveDataView  from '@/components/reactiveDataView.vue';

    const test = ref("test");

    // mount전이므로 String "test"을 반환
    console.log(test.value);

    onMounted( () => {
    // mount후이므로 dom객체 <div ref="test">test label</div>
    console.log(test.value);
    // 렌더링 된 dom요소내 엘리먼트에 접근가능
    console.log(test.value.innerText);
    })
    </script>
    ```
- 관련 함수
    1. 

## reactive()
- 오브젝트로 선언되며 내부요소에 값을 유동적으로 변경 가능​​​​​​​
    ```
    <script>
    import { reactive } from "vue";

    const test = reactive({​​​​​​​​​​​​​​
        a: 1,
        b: "hi",
    }​​​​​​​​​​​​​​);

    // 오브젝트로 선언되기에 특정값을 사용하는 경우 해당 요소를 붙여 표기한다.
    console.log(test.a)

    </script>
    ```
- ref()객체의 경우 오브젝트로 선언한뒤 reactive객체처럼 사용이 가능하다.
    ```
    <script>
    import { ref } from "vue";

    const test = ref({​​​​​​​​​​​​​​
        a: 1,
        b: "hi",
    }​​​​​​​​​​​​​​);
    // ref객체이기에 value로 접근한뒤 해당 요소를 붙여 접근한다.
    console.log(test.value.a)
    </script>
    ```

- 관련 함수(vue내장 객체로 import해서 사용)
    1. isReactive(state)
        - 해당 인수가 reactive로 생성된 객체인지를 판단하여 boolean값을 반환
        - ref객체또한 false를 반환
        ```
        <script>
        import { ref, reactive, isReactive } from "vue";

        const test = reactive({​​​​​​​​​​​​​​
            a: 1,
            b: "hi",
        }​​​​​​​​​​​​​​);
        
        const test2 = ref(0);

        console.log(isReactive(test)) // true
        console.log(isReactive(test2)) // false
        </script>
        ```
    2. readonly()
        - 인수의 reactive객체의 읽기전용 객체를 반환(참조형 복사된 객체)
        - 읽기전용 객체이므로 변경이 불가능하다.
        - 중첩객체또한 읽기전용이 된다.
        ```
        <script>
        import { reactive, readonly } from "vue";

        const test = reactive({​​​​​​​​​​​​​​
            a: 1,
            b: "hi",
        }​​​​​​​​​​​​​​);

        const testCopy = readonly(test);

        // 복사된 객체가 읽기전용, 중첩된 읽기전용이기에 변경이 불가하다
        testCopy.a = 2;
        </script>
        ```

## ref() vs reactive()
- 공통점
    - 반응형 프록시객체 생성
    ```
    <template>
        <div>{{ test1 }}</div>
        <div>{{ test2.value }}</div>
        <div>{{ test3 }}</div>
    </template>

    <script>
    import {​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​ ref, reactive, onUpdated } from "vue"
    
    const test = ref(0);
    const test2 = reactive({​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​ value: 1 }​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​);
    const test3 = 2;
    
    onUpdated(() => {​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
        console.log("updated");
        // 2번의 updated
        // ref(), reactive()는 반응형 객체이므로 값의 변경은 DOM의 업데이트를 발생시킨다
    }​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​)
    
    setTimeout(() => {​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
        test.value = 5;
    }​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​, 1000);
    
    setTimeout(() => {​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
        test2.value = 5;
    }​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​, 2000);
    
    setTimeout(() => {​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
        test3 = 5;
    }​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​, 3000);
    </script>
    ```
- 값을 직접 변경하는 것이 아닌 value에 접근하여 변경
    ```
    <script>
    import { ref } from "vue";
    
    const test = ref(10);
    const test2 = reactive({​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​ value: 10 }     ​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​);
    // test2.value
    
    console.log(test);
    console.log(test2);
    </script>
    ```

- 차이점
    - template내에서의 표기법​​​​​​
        ```
        <template>
            <!-- ref()객체는 template내에서는 .value없이 값에 접근 가능  -->
            <div>{{ test1 }}</div>
            <div>{{ test2.value }}</div>
        </template>
        
        <script>
        import {​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​ ref, reactive, onUpdated } from "vue"
        const test = ref(0);
        const test2 = reactive({​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​ value: 1 }​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​);
        </script>
        ```
    - 값의 변경
        ```
        <script>
        import {​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​ ref, reactive, onUpdated } from "vue"
        const test = ref(0);
        const test2 = reactive({​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​ num: 1 }​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​);
        
        // 선언ㅂ를 보지않아도, .value를 통해 반응형 객체임을 알 수 있다.
        test.value = 1;
        // test2가 반응형 객체인지 선언부를 보지않으면 알기 어렵다
        test2.num = 2;
        </script>

        ```
        - 자바스크립트 내에서 프록시의 값을 변경하는 것은 .value를 사용하지 않고는 불가능하다
        - 상기의 이유로 해당 객체가 반응형 객체라는 것을 보다 알기 쉬워 ref를 선호한다.

## watch()
- 개요
    - 특정 객체의 변경을 감지하여 콜백함수를 호출
    - 감지 가능한 객체
        1. ref()객체
        2. 반응성 객체 (reactive)
        3. getter함수 값
- 기본 구성
    ```
    import {  watch } from 'vue'

    watch(감지 대상, 콜백함수(), { 옵션 })
    ```
- 옵션
    - watch가 실행되는 조건부등을 담은 객체
        - deep
            - 객체내 요소의 변경을 감지(배열, 객체)
                - false인경우 객체를 감지하는것은 객체 자체를 재할당 하는 경우를 의미
            - 반응성 객체인경우 default로 true상태
        - immediate
            - 변경 감지 전 즉시 콜백함수를 실행
            - 데이터 초기선언시 감지됨(created)
        - plush
            - 콜백함수의 호출타이밍을 지정
            - ex) DOM의 업데이트전 감지 => "post"
- 예제
    ```
    import { ref, watch } from 'vue'

    const x = ref(1)
    const y = ref(2)

    // 단일 객체 감시
    watch(x, ([newX, prevX]) => {
    console.log(`prev x is ${prevX} and current x is ${newX}`)
    })

    // 복수의 객체 감시
    watch([x, y], ([newX, newY], [prevX, prevY]) => {
    console.log(`prev x is ${prevX} and current x is ${newX}`)
    })

    // watch를 선언한 이래로 변경을 감지함
    x.value = 2;
    ```


## watchEffect()
- 개요
    - 반응성 객체의 변경을 감지하여 즉시 콜백함수를 호출
    - computed()와 같이 동작
        - computed() : 변경을 감지하여 반환값에 반영
        - watchEffect() : 변경을 감지하여 함수를 즉시 실행
    - 복수의 반응성 객체의 변경을 감지하나 그 이전값을 추적할 수 없다.
        - 단일객체인 경우 사용하는것이 일반적
- 기본 구성
    ```
    import {  watchEffect } from 'vue'

    watchEffect(콜백함수, { 옵션 });
    // 콜백함수 내부에는 반응성 객체가 존재하여야 한다.
    ```
- 옵션
    - plush
        - 콜백함수의 호출타이밍을 지정
    - 디버깅 함수
        - 개발자 도구내에서만 반응
        - onTrack
        ```
        // 콜백함수 내 반응성 객체를 추적
        onTrack(e) {
            console.log(e)
        },
        ```
        - onTrigger
        ```
        // 콜백함수 내 반응성 객체의 변경 트리거를 추적
        onTrigger(e) {
            console.log(e)
        }
        ```
}
- 예제
    ```
    import { ref, watch } from 'vue'

    const x = ref(1)
    const y = ref(2)

    watchEffect(() => {
        console.log(x.value);
        // 즉시 실행으로 실행
        // 1
        // 변경 감지로 실행
        // 2
    })

    x.value = 2;
    ```

    watchEffect()의 콜백함수를 빈 함수로 재할당 시 감지를 중지한다.
    ```
    watchEffect(() => {
        console.log(x);
    })

    const stopWatch = watchEffect(() => {})

    stopWatch();
    ```

