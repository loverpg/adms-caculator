
/* CALCULADORA DE RECURSOS - MADNEZZ */

(function () {

    // Evita iniciar vários intervalos caso existam vários posts
    if (window.madnezzCalculadoraIniciada) return;

    window.madnezzCalculadoraIniciada = true;

    function calcularRecursosMadnezz() {

        // Procura todas as calculadoras da página
        const calculadoras = document.querySelectorAll('.adms-caculator');

        calculadoras.forEach(calculadora => {

            function obterValor(nome) {

                const elemento = calculadora.querySelector(
                    `[data-valor="${nome}"]`
                );

                if (!elemento) return 0;

                const valor = elemento.textContent
                    .trim()
                    .replace(/\./g, '')
                    .replace(',', '.');

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

            // Resultados individuais
            const resultadoPA = calculadora.querySelector(
                '[data-total="pa"]'
            );

            const resultadoOuro = calculadora.querySelector(
                '[data-total="ouro"]'
            );

            if (resultadoPA) {
                resultadoPA.textContent = totalPA.toLocaleString('pt-BR');
            }

            if (resultadoOuro) {
                resultadoOuro.textContent = totalOuro.toLocaleString('pt-BR');
            }

        });

    }

    // Calcula ao carregar
    calcularRecursosMadnezz();

    // Atualiza a cada segundo
    setInterval(calcularRecursosMadnezz, 1000);

})();
