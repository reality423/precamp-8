setTimeout(function(){
    console.log("얍")
}, 2000)


// 타이머 만들기
let time = 10
setInterval(function(){
    if(time >= 0){
    console.log(time)
    time = time - 1
    }
}, 1000)

//3분 타이머 만들기
// 3분 -> 180초

let time = 180
setInterval(function(){
    if(time>=0){
        const minutes = Math.floor(time/60)
        const seconds = time%60
        console.log(minutes + ":" + seconds)
        time=time-1
    }
}, 1000)