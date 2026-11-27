
/* CALCULADORA DE RECURSOS - MADNEZZ */

(function () {

    function iniciarCalculadoraMadnezz() {

        const calculadora = document.getElementById('adms-caculator');

        if (!calculadora) return;

        function calcularRecursosMadnezz() {

            function obterValor(nome) {
                const elemento = calculadora.querySelector(
                    `[data-valor="${nome}"]`
                );

                return Number(elemento?.textContent.trim().replace(',', '.')) || 0;
            }

            const paAdm = obterValor('pa-adm');
            const ouroAdm = obterValor('ouro-adm');

            const paPost = obterValor('pa-post');
            const ouroPost = obterValor('ouro-post');

            calculadora.querySelector('#calc-total-pa').textContent =
                (paAdm + paPost).toLocaleString('pt-BR');

            calculadora.querySelector('#calc-total-ouro').textContent =
                (ouroAdm + ouroPost).toLocaleString('pt-BR');
        }

        calcularRecursosMadnezz();

        setInterval(calcularRecursosMadnezz, 1000);

        const observerCalculadoraMadnezz = new MutationObserver(function () {
            calcularRecursosMadnezz();
        });

        observerCalculadoraMadnezz.observe(document.body, {
            childList: true,
            characterData: true,
            subtree: true
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', iniciarCalculadoraMadnezz);
    } else {
        iniciarCalculadoraMadnezz();
    }

})();
