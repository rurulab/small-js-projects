// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

const modal = document.querySelector('.modal-overlay');

const modalBtn = document.querySelector('.modal-btn');
modalBtn.addEventListener('click', function () {
  modal.classList.add('open-modal');
});

const closeBtn = document.querySelector('.close-btn');
closeBtn.addEventListener('click', function () {
  modal.classList.remove('open-modal');
});


// getElementsByClassName returns a collection of elements, not a single element like querySelector does. Therefore, you can't directly add an event listener to the result of getElementsByClassName as you would with querySelector.
