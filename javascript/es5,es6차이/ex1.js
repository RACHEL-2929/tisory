// var은 재사용 O, 업데이트 O
function Ex1() {
    var ex1 = '123';
    var ex1 = '234';
    console.log('var 재선언 ' + ex1);

    ex1 = '345';
    console.log('var 업데이트 ' + ex1);
}
// console.log(Ex1());

//let 재선언 X, 업데이트 O
function Ex2() {
    // let ex2 = '123';
    let ex2 = '234';
    console.log(ex2);

    ex2 = '345';
    console.log('let 업데이트 ' + ex2);
}
// console.log(Ex2());

// var ex3 = "hello";
// var times = 2;

// if (times > 1) {
//     var ex3 = "hello2";
// }

// console.log(ex3) // hello2

// let ex3 = "hello";
// let times = 2;

// if (times > 1) {
//     let ex3 = "hello2";
// }

// console.log(ex3) // hello2


// const ex4 = 'const';
// const ex4 = 'const again';
// console.log('const 재선언: '+ex4);

// ex4 = 'const update';
// console.log('const 업데이트: '+ex4);
let sum = 0;
for (let i = 1; i <= 20; i++) {
    sum += i;
}
console.log(sum);

let choiceArray = [3, 7, 9, 11, 13, 15, 17];
let sum2 = 0;

for (let i = 0; i < choiceArray.length; i++) {
    sum2 += choiceArray[i];
}
console.log(sum2);