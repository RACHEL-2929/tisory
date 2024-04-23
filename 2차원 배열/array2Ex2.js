// 2~13 까지 3행 4열 2차원 배열 만들기 + 총합 구하기
function array2() {
    // 2~13 까지 3행 4열로 입력받고 출력
    var array = [];
    var init = 2;//증가하는 값 초기화 해주기
    var sum = 0;//총합을 구할 변수 초기화 해주기

    for (var i = 0; i < 3; i++) {

        array[i] = [];

        for (var j = 0; j < 4; j++) {

            array[i][j] = init++;//[0,1],[0,2],[0,3],[1,0],[1,1]... [2,2],[2,3]이와 같이 값이 들어감
            sum = sum + array[i][j];
        }
    }
    console.log(array);//array로 출력하면 입력된 값이 다 출력
    console.log('총합은 ' + sum);//문자열과 변수값을 동시에 출력하기 위해 +로 이를 연결해줌
}

console.log(array2());

console.log('======================');