document.write(1+1)

let classmate="철수"
console.log(classmate)

classmate = "짱구"
console.log(classmate)

const aaa= 13 // "13"은 문자로 입력되어서 계산이 되지 않음.
console.log(aaa)

// aaa=8
// console.log(aaa)

const myMoney = 10000  // 카멜케이스
console.log(myMoney)

const fruits = [
    { number: 1, title: "레드향" },
    { number: 2, title: "샤인머스켓" },
    { number: 3, title: "산청딸기" },
    { number: 4, title: "한라봉" },
    { number: 5, title: "사과" },
    { number: 6, title: "애플망고" },
    { number: 7, title: "딸기" },
    { number: 8, title: "천혜향" },
    { number: 9, title: "과일선물세트" },
    { number: 10, title: "귤" }
]

for(let i=0; i<10; i++){
    console.log(fruits[i].number+" "+fruits[i].title)
}
// VM2655:2 1 레드향
// VM2655:2 2 샤인머스켓
// VM2655:2 3 산청딸기
// VM2655:2 4 한라봉
// VM2655:2 5 사과
// VM2655:2 6 애플망고
// VM2655:2 7 딸기
// VM2655:2 8 천혜향
// VM2655:2 9 과일선물세트
// VM2655:2 10 귤