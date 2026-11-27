
/* CALCULADORA DE RECURSOS - MADNEZZ */

(function () {

    function calcularRecursosMadnezz() {

        // Procura a calculadora novamente a cada execução
        const calculadora = document.getElementById('adms-caculator');

        if (!calculadora) return;

        function obterValor(nome) {

            const elemento = calculadora.querySelector(
                `[data-valor="${nome}"]`
            );

            if (!elemento) return 0;

            const valor = elemento.textContent.trim().replace(',', '.');

            return Number(valor) || 0;
        }

        // Valores da administração
        const paAdm = obterValor('pa-adm');
        const ouroAdm = obterValor('ouro-adm');

        // Valores dos posts
        const paPost = obterValor('pa-post');
        const ouroPost = obterValor('ouro-post');

        // Soma dos recursos
        const totalPA = paAdm + paPost;
        const totalOuro = ouroAdm + ouroPost;

        // Atualiza os resultados
        const resultadoPA = calculadora.querySelector('#calc-total-pa');
        const resultadoOuro = calculadora.querySelector('#calc-total-ouro');

        if (resultadoPA) {
            resultadoPA.textContent = totalPA.toLocaleString('pt-BR');
        }

        if (resultadoOuro) {
            resultadoOuro.textContent = totalOuro.toLocaleString('pt-BR');
        }
    }

    // Calcula assim que a página carrega
    calcularRecursosMadnezz();

    // Atualiza a cada segundo, como no ADM
    setInterval(calcularRecursosMadnezz, 1000);

})();

