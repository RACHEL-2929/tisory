console.log('==========응용=========');


//1~12까지 2차원 배열(2행 6열)에서 3,5,10을 제외한 짝수합,홀수합,총합 구하기
function array2() {
    let array2 = [];
    let init = 1;
    let evensum = 0;
    let oddsum = 0;
    let sum = 0;

    for (let i = 0; i < 2; i++) {
        array2[i] = [];
        for (let j = 0; j < 6; j++) {
            array2[i][j] = init++;
            if (array2[i][j] != 3 && array2[i][j] != 7 && array2[i][j] != 10) {
                if (array2[i][j] % 2 == 0) {
                    evensum = evensum + array2[i][j];
                }
                else if (array2[i][j] % 2 == 1) {
                    oddsum = oddsum + array2[i][j];
                }
                console.log(array2[i][j]);
            }
            sum = evensum + oddsum;
        }
    }

    console.log('짝수의 합은 ' + evensum);
    console.log('홀수의 합은 ' + oddsum);
    console.log('총합은 ' + sum);

}

console.log(array2());

console.log('=====================');
