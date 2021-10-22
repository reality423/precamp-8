// ------핸드폰 번호 입력 및 확인-------------

function changePhone1(){
    const phone1 = document.getElementById("phone1").value // 010 
    if(phone1.length ===3){
        document.getElementById("phone2").focus()
        // phone2에 focus(corsor)를 옮기라는 의미
    }
}

function changePhone2(){
    const phone2 = document.getElementById("phone2").value
    if(phone2.length === 4){
        document.getElementById("phone3").focus()
    }
}



function checkValidation(){
    const phone1 = document.getElementById("phone1").value
    const phone2 = document.getElementById("phone2").value
    const phone3 = document.getElementById("phone3").value

    if(phone1 !== "" && phone2 !== ""  && phone3 !== ""){
        document.getElementById("checkNumber").setAttribute("style",'background-color: yellow')
    } else{
        /* document.getElementById("mybutton").removeAttribute("style") */
        document.getElementById("checkNumber").setAttribute("style",'background-color: none')
    }
}

//  ------ 인증번호 생성 및 타이머 시작, 인증확인 버튼 시작 -------

function checkNumber(){
    const token = String(Math.floor(Math.random()*1000000)).padStart(6, "0")
    document.getElementById("number_validation").innerText = token
    document.getElementById("check_validation").setAttribute("style",'background-color:yellow')

    let time = 180
                setInterval(function(){
                if(time>=0){
                    const minutes = String(Math.floor(time/60)).padStart(2, "0")
                    const seconds = String(time % 60).padStart(2, "0")
                    document.getElementById("number__time").innerText = minutes + ":" + seconds
                    time=time-1
                }
            }, 1000)

    
}