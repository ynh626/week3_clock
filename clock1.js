const clock = document.querySelector(".h1clock");


function getTime(){

    const time = new Date();
    const hour = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    clock.innerHTML = `${hour < 10 ? `0${hour}` : hour} : ${minutes < 10 ? `0${minutes}` : minutes} 
    : ${seconds < 10 ? `0${seconds}` : seconds}`;
    console.log("getTime 함수가 실행됨");
} 

function loop() {
    setInterval(getTime, 1000);
}
loop();