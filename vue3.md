# vue 내장 객체

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

