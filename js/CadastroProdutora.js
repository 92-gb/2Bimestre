document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var cnpj = document.getElementById('cnpj').value;
    var phone = document.getElementById('phone').value;
    var cep = document.getElementById('cep').value;

    var erroCnpj = document.getElementById('erroCnpj');
    var erroPhone = document.getElementById('erroPhone');
    var erroCep = document.getElementById('erroCep');

    var formIsValid = true;

    if(!validaCNPJ(cnpj)) {
        erroCnpj.textContent = 'CNPJ inválido.';
        formIsValid = false;
    } else {
        erroCnpj.textContent = '';
    }

    if(!validaPhone(phone)) {
        erroPhone.textContent = 'Telefone inválido.';
        formIsValid = false;
    } else {
        erroPhone.textContent = '';
    }

    if(!validaCEP(cep)) {
        erroCep.textContent = 'CEP inválido.';
        formIsValid = false;
    } else {
        erroCep.textContent = '';
    }

    if(formIsValid) {
        document.getElementById('msg').textContent = 'Formulário enviado com sucesso!';
        document.getElementById('myForm').reset();
    }
});

function validaCNPJ(cnpj) {
    // Aqui você deve implementar a validação do CNPJ.
    // Este é um exemplo simples e não deve ser usado em produção.
    return cnpj.length === 14;
}

function validaPhone(phone) {
    // Aqui você deve implementar a validação do número de telefone.
    // Este é um exemplo simples e não deve ser usado em produção.
    return phone.length === 11;
}

function validaCEP(cep) {
    // Aqui você deve implementar a validação do CEP.
    // Este é um exemplo simples e não deve ser usado em produção.
    return cep.length === 8;
}

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