'use strict';
let secretNumber = Math.trunc(Math.random()*20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener
('click',function(){
        const guess= Number(document.querySelector('.guess').value);
        if(!guess){
            document.querySelector('.message').textContent ='no number';
        }
        else if(secretNumber === guess){
            document.querySelector('body').style.background='#60b347';
            document.querySelector('.number').style.width='30rem';
            document.querySelector('.message').textContent ='You win the game.';
            document.querySelector('.number').textContent = secretNumber;
            if(score > highScore){
                highScore = score;
            }
            document.querySelector('.highscore').textContent = highScore;
        }
        else if(score > 1){
            if(guess !== secretNumber){
                score--;
                document.querySelector('.score').textContent = score;
                document.querySelector('.message').textContent = guess >secretNumber ?'Too high':'Too Low';
            }
        }
        else{
            document.querySelector('.message').textContent = 'You lose the game';
        }
    }
)

document.querySelector('.again').addEventListener('click',function(){
    document.querySelector('.message').textContent = 'Start Guessing';
    document.querySelector('.score').textContent = 20;
    document.querySelector('body').style.background='#000';
    document.querySelector('.number').style.width='15rem';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value='';
    secretNumber = Math.trunc(Math.random()*20) + 1;
    score = 20;
})