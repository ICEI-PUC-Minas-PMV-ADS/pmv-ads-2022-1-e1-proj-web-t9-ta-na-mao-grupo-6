class ValidaAnuncio {
    constructor() {
        this.formulario = document.querySelector('.formulario-anuncio');

        this.eventos();
    }

    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.camposSaoValidos();
        if (this.camposSaoValidos()) {
            const criaAnuncio = new Anuncio();
        }
    }

    camposSaoValidos() {
        let valid = true;
        //apagando erros para que, sempre que enviar formulário, os erros não acumularem na tela
        for (let errorText of this.formulario.querySelectorAll('.error-text')) {
            errorText.remove();
        }

        for (let campo of this.formulario.querySelectorAll('.validar')) {
            let label = campo.previousElementSibling.innerText;
            if (!campo.value) {
                this.criaErro(campo, `Campo "${label}" não pode estar em branco`);
                valid = false;
            }
            if (campo.tagName === "textarea") {
                this.criaErro(campo, `Campo "${label}" não pode estar em branco`);
                valid = false;
            }
            if (campo.id === "valor-anuncio") {
                if (!this.validaValor(campo)) valid = false;
            }

        }

        return valid;
    }
    validaValor(campo) {
        const centavos = campo.value.substring(campo.value.indexOf(".") + 1, campo.value.length);
        let valid = true;

        if (centavos.length !== 2) {
            valid = false;
            this.criaErro(campo, `Na casa dos centavos deve ter dois algarismos. Ex.: 20,00`);
        }

        return valid;
    }


    criaErro(campo, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div);

    }

}

const valida = new ValidaAnuncio();