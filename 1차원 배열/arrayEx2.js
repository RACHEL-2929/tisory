//1~10까지 1차원 배열에 저장하기(feat. length 활용하기)
function array2() {
    let array2 = [1,2,3,4,5,6,7,8,9,10];

    console.log('array2의 배열의 길이는 '+array2.length);

    for (let i = 0; i < array2.length; i++) {
        //인덱스가 배열의 길이를 length로 써보기
        console.log(array2[i]);
    }
}

console.log(array2());

console.log('======================');