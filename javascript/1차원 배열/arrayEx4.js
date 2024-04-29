//1~10까지 1차원 배열의 총합 구하기
function array4() {
    let array4 = [];//배열선언
    let sum = 0;//sum 변수에 총합을 저장하기 위해 초기화한다.

    for (let i = 1; i <= 10; i++) {
        //1~10까지
        array4[i] = i;
        sum = sum + array4[i];
        console.log(array4[i]);
    }
    console.log('1~10까지의 총합은 '+sum);
}

console.log(array4());

console.log('======================');