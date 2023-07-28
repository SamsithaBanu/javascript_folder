'use strict';

const poll ={
    question:"What is your favourite programming language?",
    options:['0: JavaScript','1: Python','2: Rust','3: C++'],
    answers: new Array(4).fill(0),
    registerNewAnswer(){
        const input = Number (prompt(`${this.question}\n ${this.options.join('\n')} \n what is a number`));
        typeof input === 'number' && input <=3 && input >=0 ? poll.answers[input]++
        : console.log('The number is invalid');
        console.log(this.answers);
        this.displayResults('string');
    },
    
    displayResults(type='array'){
        if(type === 'array'){
            console.log(this.answers);
        }
        else if(type === 'string'){
            console.log(`Poll results are ${this.answers.join(', ')}`)
        }
    }
    
    
}
document.querySelector('.poll').addEventListener('click',poll.registerNewAnswer.bind(poll))

// Data 1: [5, 2, 3]
// Data 2: [1, 5, 3, 9, 6, 1]



poll.displayResults.call({answers:[5, 2, 3]},'string');