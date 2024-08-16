function calcular() {
    // Solicita a entrada do usuário e converte para número
    let producao = parseFloat(document.getElementById('iproducao').value.replace(',', '.'));

    // Verifica se a produção é um número válido
    if (isNaN(producao) || producao < 0) {
        document.getElementById('ResultadoCalculo').innerHTML = "Insira um valor válido";
        return; // Sai da função para evitar exibir um resultado incorreto
    }

    // Variável para armazenar a comissão
    let comissao = 0;

    // Obtém o elemento onde o resultado será exibido
    let ResultadoCalculo = document.getElementById('ResultadoCalculo');

    // Verifica a produção e calcula a comissão
    if (producao <= 3000000.00) {
        comissao = producao * 0.005;  // 0.50% para produção até R$ 3.000.000,00
    } else if (producao >= 3000000.01 && producao <= 4500000.00) {
        comissao = producao * 0.00667;  // 0.667% para produção entre R$ 3.000.000,01 e R$ 4.500.000,00
    } else if (producao >= 4500000.01 && producao <= 5500000.00) {
        comissao = producao * 0.01091;  // 1.091% para produção entre R$ 4.500.000,01 e R$ 5.500.000,00
    } else if (producao >= 5500000.01) {
        comissao = producao * 0.01818;  // 1.818% para produção acima de R$ 5.500.000,01
    }

    // Exibe o resultado na tela
    ResultadoCalculo.innerHTML = `Sua comissão será de R$ ${comissao.toFixed(2).replace('.', ',')}`;
}
