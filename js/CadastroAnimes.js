document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var cnpj = document.getElementById('cnpj').value;
    var telefone = document.getElementById('telefone').value;
    var msg = document.getElementById('msg');
    var erroCnpj = document.getElementById('erroCnpj');
    var erroTelefone = document.getElementById('erroTelefone');

    if(!validaCNPJ(cnpj)) {
        erroCnpj.textContent = 'CNPJ inválido. Por favor insira um CNPJ válido!';
    } else {
        erroCnpj.textContent = '';
    }

    if(!validaTelefone(telefone)) {
        erroTelefone.textContent = 'Número de telefone inválido. Por favor insira um numero de telefone válido!';
    } else {
        erroTelefone.textContent = '';
    }

    if(validaCNPJ(cnpj) && validaTelefone(telefone)) {
        msg.textContent = 'Formulário enviado com sucesso!';
        msg.classList.remove('error');
        this.reset();
    } else {
        msg.textContent = 'Erro ao enviar o formulário. Confira se os dados inseridos estão corretos!';
        msg.classList.add('error');
    }
});

function validaCNPJ(cnpj) {
    cnpj = cnpj.replace(/[^\d]+/g,'');
    if(cnpj == '') return false;
    // Aqui você pode adicionar a lógica completa para a validação de CNPJ
    return true;
}

function validaTelefone(telefone) {
    // Aqui você pode adicionar a lógica para a validação do número de telefone no formato do Brasil
    // Este é um exemplo simples que valida se o número de telefone contém 11 dígitos
    var regexTelefone = /^\d{11}$/;
    return regexTelefone.test(telefone);
}

document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var cnpj = document.getElementById('cnpj').value;
    var erroCnpj = document.getElementById('erroCnpj');

    
});

function validaCNPJ(cnpj) {
    cnpj = cnpj.replace(/[^\d]+/g,'');

    if(cnpj == '') return false;
    if (cnpj.length != 14) return false;

    // Elimina CNPJs invalidos conhecidos
    if (cnpj == "00000000000000" ||
        cnpj == "11111111111111" ||
        cnpj == "22222222222222" ||
        cnpj == "33333333333333" ||
        cnpj == "44444444444444" ||
        cnpj == "55555555555555" ||
        cnpj == "66666666666666" ||
        cnpj == "77777777777777" ||
        cnpj == "88888888888888" ||
        cnpj == "99999999999999")
        return false;

    // Valida DVs
    var tamanho = cnpj.length - 2
    var numeros = cnpj.substring(0,tamanho);
    var digitos = cnpj.substring(tamanho);
    var soma = 0;
    var pos = tamanho - 7;

    for (var i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2)
            pos = 9;
    }

    var resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;

    if (resultado != digitos.charAt(0))
        return false;

    tamanho = tamanho + 1;
    numeros = cnpj.substring(0,tamanho);
    soma = 0;
    pos = tamanho - 7;

    for (i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2)
            pos = 9;
    }

    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;

    if (resultado != digitos.charAt(1))
          return false;

    return true;
}