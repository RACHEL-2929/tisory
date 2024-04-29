console.log('==========응용=========');



//1~10까지 1차원 배열에서 3,5,10을 제외한 짝수합,홀수합,총합 구하기
function array2() {
    let array = [];//배열선언
    let evensum = 0;//짝수의 합을 저장할 변수 초기화
    let oddsum = 0;//홀수의 합을 저장할 변수 초기화
    let sum = 0;//sum 변수에 총합을 저장하기 위해 초기화한다.

    for (let i = 1; i <= 10; i++) {
        //1~10까지
        array[i] = i;
        if (array[i] != 3 && array[i] != 5 && array[i] != 10) {
            //3이 아니면서 5가 아니면서 10이 아닌 숫자들만 걸러져서 들어옴
            if (array[i] % 2 == 0) {
                //짝수라는 조건에 맞게 %를 사용해서 2로 나눴을 때 나머지가 0이면 짝수
                evensum = evensum + array[i];//짝수로 판정된 값을 evensum에 저장하기
            } else if (array[i] % 2 == 1) {
                //이미 위에서 짝수를 걸러져서 else if에 들어왔고 홀수로 판정하기 위해 2로 나눴을 때 1이 나오면 홀수
                oddsum = oddsum + array[i];//홀수로 판정된 값을 oddsum에 저장하기
            }
        }

        sum = evensum + oddsum;//총합은 짝수의 합과 홀수의 합을 더하면 된다.
    }
    console.log('1~10까지 3,5,10을 제외한 총합은 ' + sum);
}

console.log(array2());

console.log('======================');
