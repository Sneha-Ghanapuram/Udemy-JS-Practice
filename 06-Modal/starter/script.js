'use strict';

const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

// querySelector select only 1st show modal. Inorder to select all show modal, we need to ur querySelectorAll
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function()
{
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
const closeModal = function()
{
    modal.classList.add('hidden');
    overlay.classList.add('hidden');   
};

for ( let i = 0; i < btnsOpenModal.length; i++)
{
    btnsOpenModal[i].addEventListener('click',openModal);
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// keyboard evnets. These are the global events.
// We have 3 types of keyborad events
// 1. Keyup: when we lift our fingure of the key.
// 2. Keypress: is fired continously when our finger on a certain key
// 3. Keydown: as soon as we press the key. We mostly use keydown.

document.addEventListener('keydown', function(e){
    console.log(e.key);

    if (e.key === 'Escape')
    {
        if(!modal.classList.contains('hidden'))
        {
            closeModal();
        }
    }
 
})