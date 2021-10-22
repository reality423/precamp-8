// 인증문자 전송하기
 
 //function number(){
        //    const token = String(Math.floor(Math.random()*1000000)).padStart(6, "0")
        //    document.getElementById("number").innerText = token
            // id가 number 인것을 찾아서 token에 담긴 문자로 바꾸어줌.
        // }
    let isStarted = false

    const number=()=>{
        if(isStarted===false){
            isStarted = true
        
                    const token = String(Math.floor(Math.random()*1000000)).padStart(6, "0")
                    document.getElementById("number").innerText = token
                    const colorToken = Number(token)
                    
                
                    alert("인증번호와 함께 타이머가 시작됩니다.")
            
                //---------- 10초 타이머
                // let time = 10
                // setInterval(function(){
                //     if(time >= 0){
                //         document.getElementById("time").innerText = time
                //         time = time - 1
                //         }
                // },1000)
            
                // -------- 3분 타이머 -------------
                let time = 180
                setInterval(function(){
                if(time>=0){
                    const minutes = String(Math.floor(time/60)).padStart(2, "0")
                    const seconds = String(time % 60).padStart(2, "0")
                    document.getElementById("time").innerText = minutes + ":" + seconds
                    time=time-1
                }
            }, 1000)

        } else {
            alert("이미 실행되었습니다.")
        }
 
}   


