const clock = document.querySelector(".h1clock");


function getTime(){

    const time = new Date();
    const hour = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    clock.innerHTML = `${hour<13?` 오전 ${(hour-12)<10?`0${(hour-12)}`:(hour-12)}`:` 오후 ${(hour-12)<10?`0${(hour-12)}`:(hour-12)}`}시 
    : ${minutes < 10 ? `0${minutes}` : minutes} 
    : ${seconds < 10 ? `0${seconds}` : seconds}`;
    console.log("getTime 함수가 실행됨");
} 

function loop() {
    setInterval(getTime, 1000);
}
loop();