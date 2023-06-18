document.getElementById('animeForm').addEventListener('submit', function(e) {
    let checkboxes = document.querySelectorAll('input[type=checkbox]');
    let checkedOne = Array.prototype.slice.call(checkboxes).some(x => x.checked);
    if (!checkedOne) {
        e.preventDefault();
        document.getElementById('message').textContent = 'Por favor, selecione pelo menos um anime.';
    } else {
        e.preventDefault(); 
        document.getElementById('message').textContent = 'Formulário enviado com sucesso.';
        document.getElementById('animeForm').reset();
    }
});