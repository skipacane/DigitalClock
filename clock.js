const blob = document.getElementById("blob");

document.body.onpointermove = event => {
    const {clientX, clientY } = event;

    
    blob.animate({
        left: `${clientX}px`,
        top: `${clientY}px`
    }, {duration: 3000, fill: "forwards"});
}


function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let ampm = h >= 12 ? 'PM' : 'AM'; //determine wether its am or pm
    h = h % 12 || 12; //convert to 12 hour format
    m = checkTime(m);
    document.getElementById('time').innerHTML = h + ':' + m;
    setTimeout(startTime, 1000);

}

function checkTime(i){
    if (i < 10) {
        i = "0" + i; //add a zero in front of numbers less than 10
    }
    return i;
}

function secondsTimer(){
    const today = new Date();
    let s = today.getSeconds();
    //calculate the progress value based on the cureent second
    let progressValue = (s / 60 * 100);
    document.getElementById('seconds').value = progressValue;
    console.log(progressValue);
    setTimeout(secondsTimer, 1000);

}


function mouseMove(){

    const blob = document.getElementById("blob");

    document.onpointermove = event => {
        const {clientX, clientY} = event;

        blob.animate({
            left: `${clientX}px`,
            top: `${clientY}px`
        }, {duration: 3000, fill: "forwards"});
    }
}

