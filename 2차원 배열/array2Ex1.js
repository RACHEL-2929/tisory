//1~6 까지 2행 3열로 2차원 배열 만들기
function array1() {
    // 1~6까지 2행 3열로 입력받고 출력
    var array = [];
    var init = 1;//증가하는 값 초기화 해주기

    for (var i = 0; i < 2; i++) {

        array[i] = [];//1차원배열에 해당하는 또다른 배열에 뭐가 들어갈지 모르니 비워둠

        for (var j = 0; j < 3; j++) {

            array[i][j] = init++;//[0,1],[0,2][1,0],[1,1]... 이와 같이 값이 들어감
        }
    }
    console.log(array);//array로 출력하면 입력된 값이 다 출력
}

console.log(array1());

console.log('======================');