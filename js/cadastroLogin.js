window.onload = function() {
    var form = document.getElementById('cadastroForm');
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      if (validarForm()) {
        form.submit();
      }
    });
  };
  
  function validarForm() {
    var nome = document.getElementById('nome').value.trim();
    var email = document.getElementById('email').value.trim();
    var celular = document.getElementById('celular').value.trim();
    var cpf = document.getElementById('cpf').value.trim();
    var senha = document.getElementById('senha').value.trim();
    var confirmarSenha = document
};