const toggleButton = document.getElementById('toggle-form');
const formAvaliacao = document.getElementById('form-avaliacao');
const toggleIcon = document.getElementById('toggle-icon');

    toggleButton.addEventListener('click', () => {
        formAvaliacao.classList.toggle('hidden');

        if (formAvaliacao.classList.contains('hidden')) {
            toggleIcon.textContent = '▼';
        } else {
            toggleIcon.textContent = '▲';
        }
    });