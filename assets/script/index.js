'use strict';

/*
    JavaScript Basics
    Inderjeet Cheema

*/
import { onEvent, getElement, select } from "./utils.js";
import { Score } from "./Score.js";



const timer = select('.timer');
const input = select('.input');
const btn2 = select('.btn2');
const btn = select('.btn');
const bigBox = select('.big-box');
const words = select('.words');
const hitss = select('.hits');
const gameOver = select('.restart');
const heading = select('h2');
const good = select('.date');
const showInfo = select('.info');
const game = select('.game');
const mesg = select('.mesg');
const startInfo = select('.start-info');

const onHits = new Audio('./assets/audio/hits.wav');
onHits.type = 'audio/wav';
const gameLoad = new Audio('./assets/audio/gameload.wav');
gameLoad.type = 'audio/wav';
const gameLevel = new Audio('./assets/audio/gamelevel.mp3');
gameLevel.type = 'audio/mp3';
const gameIsOver = new Audio('./assets/audio/gameover.wav');
gameIsOver.type = 'audio/wav';





const gameWords2 = ['dinosaur', 'love', 'pineapple', 'calendar', 'robot', 'building', 'population', 
'weather', 'bottle', 'history', 'dream', 'character', 'money', 'absolute', 
'discipline', 'machine', 'accurate', 'connection', 'rainbow', 'bicycle', 
'eclipse', 'calculator', 'trouble', 'watermelon', 'developer', 'philosophy', 
'database', 'periodic', 'capitalism', 'abominable', 'component', 'future', 
'pasta', 'microwave', 'jungle', 'wallet', 'canada', 'coffee', 'beauty', 'agency', 
'chocolate', 'eleven', 'technology', 'alphabet', 'knowledge', 'magician', 
'professor', 'triangle', 'earthquake', 'baseball', 'beyond', 'evolution', 
'banana', 'perfumer', 'computer', 'management', 'discovery', 'ambition', 'music', 
'eagle', 'crown', 'chess', 'laptop', 'bedroom', 'delivery', 'enemy', 'button',
'superman', 'library', 'unboxing', 'bookstore', 'language', 'homework', 
'fantastic', 'economy', 'interview', 'awesome', 'challenge', 'science', 'mystery', 
'famous', 'league', 'memory', 'leather', 'planet', 'software', 'update', 'yellow', 
'keyboard', 'window']

let gameWords = [...gameWords2];

function mytimer() {
    let totalTime = 98;
let countDown = setInterval(function(){
  if(totalTime <= 0 ){
    gameLevel.pause();
    gameIsOver.play();
    clearInterval(countDown);
    timer.innerHTML = `Time is Over!! Your Hits ${hits}`;
    gameOver.style.visibility = 'visible';
    game.style.display = 'none';
    words.style.visibility = 'hidden';
    displayInfo();
  } else {
    timer.innerHTML = totalTime + " seconds remaining";
  }
  totalTime--;
}, 1000);
}




// const gameWords3 = ['word1', 'word2', 'word3'];
// let gameWords = [...gameWords3]
function getWord(gameWords)
{
  let random = Math.floor(Math.random() * gameWords.length);
  words.innerText = gameWords[random];
  gameWords.splice(random, 1);
};

let hits = 0;

function compare() {
    let userInput = input.value.toLowerCase();
    if(userInput === words.innerText) {
        hits++;
        onHits.play();
        hitss.innerText = `Hits : ${hits}`;
        input.value = '';
        getWord(gameWords);
    } 
}

onEvent('keyup', input, function() {
    compare();
});


onEvent('click' , btn2,  function() {
    input.focus();
    words.style.visibility = 'visible';
    btn2.style.animationPlayState = 'paused';
    startInfo.style.visibility = 'hidden';
    gameLevel.play();
    mytimer();
    getWord(gameWords);
    btn2.disabled = true;
});

onEvent('click' , btn,  function() {
    gameWords = [...gameWords2];
    getWord(gameWords);
    mesg.style.visibility = 'visible';
    gameIsOver.pause();
    gameLoad.play();
    mesg.innerText = 'Get Ready, Game is loading'
    gameOver.style.visibility = 'hidden';
    setTimeout(() => {
        gameLevel.play();
        input.value = '';
        hits = 0;
        hitss.innerText = `Hits : ${hits}`;
        game.style.display = 'block';
        input.focus();
        mesg.style.visibility = 'hidden';
        startInfo.style.visibility = 'hidden';
        words.style.visibility = 'visible';
        mytimer();
      }, 4000);
});

function displayInfo() {
    let date = new Date().toString().substring(0, 15);
    let percentage = ((hits/90) * 100).toFixed(2);
    const scoreBoard = new Score(date, hits, percentage);
    showInfo.innerText = `${scoreBoard.playerData()}`
}