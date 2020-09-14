const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');

for (let card of cards) {
    card.addEventListener('click', () => {
        const cardId = card.getAttribute('id');
        modalOverlay.classList.add('active');
        modalOverlay.querySelector('iframe').src=`https://rocketseat.com.br/${cardId}`
    })
}

document.querySelector('.close-modal').addEventListener('click', () => {
    modalOverlay.classList.remove('active');
    modalOverlay.querySelector('iframe').src = "";
});

document.querySelector('.maximize-modal').addEventListener('click', () => {
    modalOverlay.classList.add('maximize');
})