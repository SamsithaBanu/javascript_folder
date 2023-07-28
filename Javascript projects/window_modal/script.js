'use strict';
let showModel = document.querySelectorAll('.show-modal');
let overlay = document.querySelector('.overlay');
let modal = document.querySelector('.modal');
let closeModal = document.querySelector('.close-modal');

const showmodal = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const addHidden =  function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

for(let i=0;i<showModel.length;i++){
    showModel[i].addEventListener('click',showmodal);
};

closeModal.addEventListener('click',addHidden);

overlay.addEventListener('click',addHidden);

document.addEventListener('keydown',function(e){
    if(e.key === 'Escape'&& !modal.classList.contains('hidden')){
        addHidden();
    }
})