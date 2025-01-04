let modal = document.getElementById('post-modal');

function expandir() {
    modal.classList.remove('d-none');
    modal.classList.add('d-flex');
    document.body.style.overflow = 'hidden';
}
function fecharModal() {
    modal.classList.add('d-none');
    modal.classList.remove('d-flex');
    document.body.style.overflow = 'auto';
}