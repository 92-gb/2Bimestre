window.onload = function() {
    var form = document.getElementById('loginForm');
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      if (validarSenha() && validarConfirmarSenha()) {
        alert('Login realizado com sucesso!');
        
      }
    });
  };
  
  function validarSenha() {
    var senha = document.getElementById('senha').value.trim();
  
    // Verificar se a senha atende aos critérios desejados
    if (senha.length < 8) {
      document.getElementById('senhaError').textContent = 'A senha deve ter pelo menos 8 caracteres.';
      return false;
    }
  
    // Verificar se a senha contém pelo menos uma letra maiúscula, uma letra minúscula e um número
    var hasUpperCase = /[A-Z]/.test(senha);
    var hasLowerCase = /[a-z]/.test(senha);
    var hasNumber = /[0-9]/.test(senha);
  
    if (!hasUpperCase || !hasLowerCase || !hasNumber) {
      document.getElementById('senhaError').textContent = 'A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula e um número.';
      return false;
    }
  
    document.getElementById('senhaError').textContent = '';
    return true;
  }
  
  function validarConfirmarSenha() {
    var senha = document.getElementById('senha').value.trim();
    var confirmarSenha = document.getElementById('confirmarSenha').value.trim();
  
    // Verificar se a senha e a confirmação de senha são iguais
    if (senha == confirmarSenha) {
      document.getElementById('senha correta').textContent = 'As senhas não correspondem.';
     
    }else{
        document.getElementById('senha incorreta').textContent = 'As senhas não correspondem.';
      return false;
    }
  
    document.getElementById('confirmarSenhaError').textContent = '';
    return true;
  }