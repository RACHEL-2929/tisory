//1~10까지 1차원 배열에 저장하기
function array1() {
    let array1 = [1,2,3,4,5,6,7,8,9,10];

    for (let i = 0; i < 10; i++) {
        //인덱스는 0부터 시작하므로 0~9번째의 해당하는 인덱스의 값을 불러온다
        console.log(array1[i]);
    }
}

console.log(array1());

console.log('======================');