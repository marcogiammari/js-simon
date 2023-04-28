// INIT

playBtn = document.getElementById("play-btn");
numsParagraph = document.getElementById("nums-paragraph");
timerParagraph = document.getElementById("timer-paragraph");
resultParagraph = document.getElementById("result-paragraph");
winParagraph = document.getElementById("win-paragraph");

playBtn.addEventListener("click", startGame);

function startGame() {
    let paragraphs = document.querySelectorAll("p")
    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].innerHTML = "";
        
    }
    numsParagraph.innerHTML = "";
    getRndNums();
    setTimer();
    setTimeout(reset, 6000);
}

rndNums = []
function getRndNums() {
    rndNums = []
    for (let i = 0; i < 5; i++) {
        let rndNum = Math.floor(Math.random() * 9 + 1);
        numsParagraph.innerHTML += rndNum;
        rndNums.push(rndNum);
    }
}

function setTimer() {
    timerParagraph.classList.remove("d-none");
    let seconds = 5;
    timer = setInterval(function() {
        seconds--;
        timerParagraph.innerHTML = "Tempo restante: " + seconds + " secondi";
        if (seconds == 0) {
            timerParagraph.innerHTML = "Tempo scaduto!"
            numsParagraph.innerHTML = "";
            clearInterval(timer);
            
        }
    }, 1000)
}


let userNums = [];
function reset() {
    userNums = [];
    resultParagraph.classList.remove("d-none");
    numsParagraph.innerHTML = "I numeri da te inseriti sono: ";
    for (let i = 0; i < 5; i++) {
        let msg = prompt("Riscrivi i cinque numeri uno alla volta");
        userNums.push(msg);
        numsParagraph.innerHTML += msg;
    }    
    result(userNums)
}

function result(numsToCheck) {
    winParagraph.classList.remove("d-none");
    numsArray = [];
    numsParagraph.innerHTML = `Numeri inseriti: ${numsToCheck.join('')}`;
    for (let i = 0; i < numsToCheck.length; i++) {
        if (numsToCheck[i] == rndNums[i]) {
            numsArray.push(numsToCheck[i]);
        } 
    }
    rndNums = rndNums.join('');
    numsToCheck = numsToCheck.join('');
    resultParagraph.innerHTML = `Hai indovinato ${numsArray.length} numero/i.`
    if (numsArray.length > 0) {
        resultParagraph.innerHTML = `Numeri indovinati: ${numsArray.join("")}`
    }
    timerParagraph.innerHTML = `I numeri corretti erano: ${rndNums}`;
    
    if (numsArray.length == 5) {
        winParagraph.innerHTML += "<strong>Hai vinto</strong>"
    } else {
        winParagraph.innerHTML += "<strong>Hai perso</strong>"
    }
}

