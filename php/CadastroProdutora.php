<?php
function validaCNPJ($cnpj) {
    $cnpj = preg_replace('/[^0-9]/', '', $cnpj);

    if (strlen($cnpj) != 14 || preg_match('/^(\d)\1*$/', $cnpj)) {
        return false;
    }

    // Valida DVs
    $tamanho = strlen($cnpj) - 2;
    $numeros = substr($cnpj, 0, $tamanho);
    $digitos = substr($cnpj, $tamanho);
    $soma = 0;
    $pos = $tamanho - 7;

    for ($i = $tamanho; $i >= 1; $i--) {
        $soma += $numeros[$tamanho - $i] * $pos--;
        if ($pos < 2) {
            $pos = 9;
        }
    }

    $resultado = $soma % 11 < 2 ? 0 : 11 - $soma % 11;

    if ($resultado != $digitos[0]) {
        return false;
    }

    $tamanho = $tamanho + 1;
    $numeros = substr($cnpj, 0, $tamanho);
    $soma = 0;
    $pos = $tamanho - 7;

    for ($i = $tamanho; $i >= 1; $i--) {
        $soma += $numeros[$tamanho - $i] * $pos--;
        if ($pos < 2) {
            $pos = 9;
        }
    }

    $resultado = $soma % 11 < 2 ? 0 : 11 - $soma % 11;

    if ($resultado != $digitos[1]) {
        return false;
    }

    return true;
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $cnpj = $_POST["cnpj"];

    if (validaCNPJ($cnpj)) {
        // O CNPJ é válido, você pode prosseguir com o processamento do formulário aqui.
        echo "CNPJ válido. Formulário processado com sucesso!";
    } else {
        echo "CNPJ inválido. Por favor, insira um CNPJ válido.";
    }
}
?>