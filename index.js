const $buttonStonePlayer1 = document.querySelector (".button-move-stone-1")
const $buttonPaperPlayer1 = document.querySelector (".button-move-paper-1")
const $buttonScissorsPlayer1 = document.querySelector (".button-move-scissors-1")
const $moveBox1 = document.querySelector ('.moveBox1')

const $buttonStonePlayer2 = document.querySelector (".button-move-stone-2")
const $buttonPaperPlayer2 = document.querySelector (".button-move-paper-2")
const $buttonScissorsPlayer2 = document.querySelector (".button-move-scissors-2")
const $moveBox2 = document.querySelector ('.moveBox2')

const $scorePlayer1 = document.querySelector ('.scorePlayer1')
const $scorePlayer2 = document.querySelector ('.scorePlayer2')

const $winnerName = document.querySelector ('.winner-title')

let movePlayer1 = ''
let movePlayer2 = ''
let winner = 0
let player1Score = 0
let player2Score = 0

function setWinner() {
    if (movePlayer1 == '' || movePlayer2 == ''){
        return
    }
    else if(movePlayer1 == 'stone' && movePlayer2 == 'stone'){
    winner = 3
} else if (movePlayer1 == 'stone' && movePlayer2 == 'paper'){ 
    winner = 2
}else if (movePlayer1 == 'stone' && movePlayer2 == 'scissors'){ 
    winner = 1
}else if (movePlayer1 == 'paper' && movePlayer2 == 'stone'){ 
    winner = 1
}else if (movePlayer1 == 'paper' && movePlayer2 == 'paper'){ 
    winner = 3
}else if (movePlayer1 == 'paper' && movePlayer2 == 'scissors'){ 
    winner = 2
}else if (movePlayer1 == 'scissors' && movePlayer2 == 'stone'){ 
    winner = 2
}else if (movePlayer1 == 'scissors' && movePlayer2 == 'paper'){ 
    winner = 1
}else if (movePlayer1 == 'scissors' && movePlayer2 == 'scissors'){ 
    winner = 3
}}

function addWinnerScore () {
    if (winner == 1){
        player1Score = player1Score + 1
    } else if (winner == 2){
        player2Score = player2Score + 1 
    }
}

function printWinnerScore (){
    $scorePlayer1.innerHTML = player1Score.toString().padStart(2, '0')
    $scorePlayer2.innerHTML = player2Score.toString().padStart(2, '0')
}

function printWinnerTitle (){
    if (winner == 1){
    $winnerName.innerHTML == 'jogador 1 venceu!'
    } else if (winner == 2){
    $winnerName.innerHTML == 'jogador 2 venceu!'
    }else if (winner == 3){
        $winnerName.innerHTML == 'Empatou!'
        }
}

function resetBattleField (){
    $moveBox1.innerHTML = ''
    $moveBox2.innerHTML = ''
}

function resetMoveVariables (){
    movePlayer1 = ''
    movePlayer2 = ''
}

function handleStone1Move() {
    $moveBox1.innerHTML = '<img src="/images/stone.png">'
    movePlayer1 = 'stone'
    setWinner ()
    addWinnerScore ()
    printWinnerScore ()
    printWinnerTitle ()
    if (winner != 0){ 
        setTimeout(resetBattleField, 1000)
        resetMoveVariables ()
        winner = 0
    }
}
function handlePaper1Move() {
    $moveBox1.innerHTML = '<img src="/images/paper.png">'
    movePlayer1 = 'paper'
    setWinner ()
    addWinnerScore ()
    printWinnerScore ()
    printWinnerTitle ()
    if (winner != 0){ 
        setTimeout(resetBattleField, 1000)
        resetMoveVariables ()
        winner = 0
    }
}
function handleScissors1Move() {
    $moveBox1.innerHTML = '<img src="/images/scissors.png">'
    movePlayer1 = 'scissors'
    setWinner ()
    addWinnerScore ()
    printWinnerScore ()
    printWinnerTitle ()
    if (winner != 0){ 
        setTimeout(resetBattleField, 1000)
        resetMoveVariables ()
        winner = 0
    }
}

function handleStone2Move() {
    $moveBox2.innerHTML = '<img src="/images/stone.png">'
    movePlayer2 = 'stone'
    setWinner ()
    addWinnerScore ()
    printWinnerScore ()
    printWinnerTitle ()
    if (winner != 0){ 
        setTimeout(resetBattleField, 1000)
        resetMoveVariables ()
        winner = 0
    }
}
function handlePaper2Move() {
    $moveBox2.innerHTML = '<img src="/images/paper.png">'
    movePlayer2 = 'paper'
    setWinner ()
    addWinnerScore ()
    printWinnerScore ()
    printWinnerTitle ()
    if (winner != 0){
        setTimeout(resetBattleField, 1000)
        resetMoveVariables ()
        winner = 0
    } 
}
function handleScissors2Move() {
    $moveBox2.innerHTML = '<img src="/images/scissors.png">'
    movePlayer2 = "scissors"
    setWinner ()
    addWinnerScore ()
    printWinnerScore ()
    printWinnerTitle ()
    if (winner != 0){ 
        setTimeout(resetBattleField, 1000)
        resetMoveVariables ()
        winner = 0
    }
}

$buttonStonePlayer1.addEventListener('click' , handleStone1Move)
$buttonPaperPlayer1.addEventListener('click' , handlePaper1Move)
$buttonScissorsPlayer1.addEventListener('click' , handleScissors1Move)

$buttonStonePlayer2.addEventListener('click' , handleStone2Move)
$buttonPaperPlayer2.addEventListener('click' , handlePaper2Move)
$buttonScissorsPlayer2.addEventListener('click' , handleScissors2Move)