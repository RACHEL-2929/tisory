//2~13까지 3행 4열 2차원 배열 + 짝수의 합+ 홀수의 합 + 총합 
function array3() {
    // 2~13 까지 3행 4열로 입력받고 출력
    var array = [];
    var init = 2;//증가하는 값 초기화 해주기
    var evensum = 0;//짝수의 합 변수 초기화 해주기
    var oddsum = 0;//홀수의 합 변수 초기화 해주기
    var sum = 0;//총합을 구할 변수 초기화 해주기

    for (var i = 0; i < 3; i++) {

        array[i] = [];

        for (var j = 0; j < 4; j++) {

            array[i][j] = init++;
            if (array[i][j] % 2 == 0) {
                evensum = evensum + array[i][j];
            }
            else if (array[i][j] % 2 == 1) {
                oddsum = oddsum + array[i][j];
            }
            sum = evensum + oddsum;
        }
    }
    console.log(array);
    console.log('짝수의 합은 ' + evensum);
    console.log('홀수의 합은 ' + oddsum);
    console.log('총합은 ' + sum);
}

console.log(array3());

console.log('======================');