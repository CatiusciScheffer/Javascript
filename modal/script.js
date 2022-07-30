const openModalButton = document.querySelector('#open-modal');
const closeModalButton = document.querySelector('#close-modal');
const modal = document.querySelector('#modal');
const fade = document.querySelector('#fade');

const toggleModal = () => {
    modal.classList.toggle("hide");
    fade.classList.toggle('hide');
};

/**
 * O CÓDIGO ACIMA PODERIA SER SIMPLIFICADO ASSIM:
 * const toggleModal = () => {
 * [modal, fade]forEach((el) => el.classList.toggle('hide'));
 * };
 */

[openModalButton, closeModalButton].forEach((el) => {
    el.addEventListener('click', () => toggleModal());
})/*o que estiver no array e tiver um click vai executar o toggle (criar ou excluir a classe)*/