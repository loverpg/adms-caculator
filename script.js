
/* CALCULADORA DE RECURSOS - MADNEZZ */
/* Script isolado dentro de #adms-caculator */

(function () {

    const calculadora = document.getElementById('adms-caculator');

    if (!calculadora) return;

    const campoPaAdm = calculadora.querySelector('#calc-pa-adm');
    const campoOuroAdm = calculadora.querySelector('#calc-ouro-adm');
    const campoPaPost = calculadora.querySelector('#calc-pa-post');
    const campoOuroPost = calculadora.querySelector('#calc-ouro-post');

    const totalPa = calculadora.querySelector('#calc-total-pa');
    const totalOuro = calculadora.querySelector('#calc-total-ouro');

    const botaoLimpar = calculadora.querySelector('#calc-limpar');

    function obterValor(campo) {
        return Math.max(0, Number(campo.value) || 0);
    }

    function calcularRecursosMadnezz() {

        const paAdm = obterValor(campoPaAdm);
        const ouroAdm = obterValor(campoOuroAdm);

        const paPost = obterValor(campoPaPost);
        const ouroPost = obterValor(campoOuroPost);

        const somaPa = paAdm + paPost;
        const somaOuro = ouroAdm + ouroPost;

        totalPa.textContent = somaPa.toLocaleString('pt-BR');
        totalOuro.textContent = somaOuro.toLocaleString('pt-BR');
    }

    [
        campoPaAdm,
        campoOuroAdm,
        campoPaPost,
        campoOuroPost
    ].forEach(campo => {
        campo.addEventListener('input', calcularRecursosMadnezz);
    });

    botaoLimpar.addEventListener('click', function () {

        campoPaAdm.value = '';
        campoOuroAdm.value = '';
        campoPaPost.value = '';
        campoOuroPost.value = '';

        calcularRecursosMadnezz();

    });

    calcularRecursosMadnezz();

})();
