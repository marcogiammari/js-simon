// INIT

playBtn = document.getElementById("play-btn");
numsParagraph = document.getElementById("nums-paragraph");
timerParagraph = document.getElementById("timer-paragraph");
resultParagraph = document.getElementById("result-paragraph");
winParagraph = document.getElementById("win-paragraph");

playBtn.addEventListener("click", startGame);

function startGame() {
    numsParagraph.innerHTML = "";
    getRndNums();
    setTimer();
    setTimeout(reset, 4000);
}

rndNums = []
function getRndNums() {
    for (let i = 0; i < 5; i++) {
        let rndNum = Math.floor(Math.random() * 9 + 1);
        numsParagraph.innerHTML += rndNum;
        rndNums.push(rndNum);
    }
}

function setTimer() {
    let seconds = 3;
    timer = setInterval(function() {
        seconds--;
        timerParagraph.innerHTML = seconds;
        if (seconds == 0) {
            timerParagraph.innerHTML = "Tempo scaduto!"
            numsParagraph.innerHTML = "";
            clearInterval(timer);
            
        }
    }, 1000)
}


let userNums = [];
function reset() {
        numsParagraph.innerHTML = "I numeri da te inseriti sono: ";
        for (let i = 0; i < 5; i++) {
            let msg = prompt("Riscrivi i cinque numeri uno alla volta");
            userNums.push(msg);
            
            numsParagraph.innerHTML += msg;
        }    
        result(userNums)
}

function result(numsToCheck) {
    numsArray = [];
    rndNums = rndNums.join('');
    numsToCheck = numsToCheck.join('');
    numsParagraph.innerHTML = `Numeri inseriti: ${numsToCheck}`;
    for (let i = 0; i < numsToCheck.length; i++) {
        if (numsToCheck[i] == rndNums[i]) {
            numsArray.push(numsToCheck[i]);
        } 
    }
    resultParagraph.innerHTML = `Hai indovinato ${numsArray.length} numero/i. Numeri indovinati: ${numsArray.join("")}`
    timerParagraph.innerHTML = `I numeri corretti erano: ${rndNums}`;
    
    if (numsToCheck == rndNums) {
        winParagraph.innerHTML += "<strong>Hai vinto</strong>"
    } else {
        winParagraph.innerHTML += "<strong>Hai perso</strong>"
    }
}