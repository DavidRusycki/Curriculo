var titulo = (function() {

    var iniciaAnimacao = () => {
        setTimeout(() => {
            animacaoFunction();
            iniciaAnimacao();
        }, 500);
    }

    var animacaoFunction = () => {
        let sTitulo = getTitulo().innerText;
        if (sTitulo.indexOf('_') >= 0) {
            sTitulo = sTitulo.replace('_', '');
        }
        else {
            sTitulo += '_';
        }
        getTitulo().innerText = sTitulo;
    }

    var getTitulo = () => {
        return document.getElementById('titulo');
    }

    return {
        animacao : () => {
            iniciaAnimacao();
        }
    };

}());