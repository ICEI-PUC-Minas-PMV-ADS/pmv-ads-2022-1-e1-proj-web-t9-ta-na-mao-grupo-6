class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('.formulario-cadastro');

        this.eventos();
    }

    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const camposValidos = this.camposSaoValidos();
        const senhasValidas = this.senhasSaoValidas();

        if (camposValidos && senhasValidas) {
            const criaUsuario = new Usuario();
        }
    }

    senhasSaoValidas() {
        let valid = true;
        const senha = this.formulario.querySelector('.senha');
        const confirmarSenha = this.formulario.querySelector('.confirmar-senha');

        if (senha.value !== confirmarSenha.value) {
            valid = false;
            this.criaErro(senha, 'Campos senha e confirmar senha devem ser iguais');
            this.criaErro(confirmarSenha, 'Campos senha e confirmar senha devem ser iguais');
        }

        if (senha.value.length < 6 || senha.value.length > 12) {
            valid = false;
            this.criaErro(senha, 'Precisa estar entre 6 e 12 caracteres');
        }

        return valid;
    }

    camposSaoValidos() {
        let valid = true;
        //apagando erros para que, sempre que enviar formulário, os erros não acumularem na tela
        for (let errorText of this.formulario.querySelectorAll('.error-text')) {
            errorText.remove();
        }

        for (let campo of this.formulario.querySelectorAll('.validar')) {
            const label = campo.previousElementSibling.innerText;
            if (!campo.value) {
                this.criaErro(campo, `Campo "${label}" não pode estar em branco`);
                valid = false;
            }
            if (campo.classList.contains('termos-uso')) {
                if (!campo.checked) {
                    this.criaErro(campo, 'Aceitar termos de uso');
                    valid = false;
                }
            }
            if (campo.classList.contains('cpf')) {
                if (!this.validaCPF(campo)) valid = false;
            }
            if (campo.classList.contains('email')) {
                if (!this.validaEmail(campo)) valid = false;
            }
            if (campo.classList.contains('telefone')) {
                if (!this.validaTelefone(campo)) valid = false;
            }
        }

        return valid;
    }

    validaTelefone(campo) {
        let valid = true;
        const telefone = campo.value;
        const validaTel = /[0-9]{2} [9]{1}[0-9]{4}-[0-9]{4}/g;
        console.log(typeof telefone);
        
        console.log(telefone.match(validaTel));
        if (telefone.replace(/\D/g,"").length !== 11 && !telefone.match(validaTel)) {
            this.criaErro(campo, 'Formato de telefone exigido  (Ex.:31 90000-0000)');
            valid = false;

        }

        return valid;
    }

    validaEmail(campo) {
        const emailUsuario = campo.value.substring(0, campo.value.indexOf("@"));
        const emailDominio = campo.value.substring(campo.value.indexOf("@") + 1, campo.value.length);
        const dados = JSON.parse(localStorage.getItem("dadosUsuario"));

        let valid = true;

        if ((emailUsuario.length) <= 1 ||
            (emailDominio.length) <= 3 ||
            (emailUsuario.search("@") !== -1) ||
            (emailDominio.search("@") !== -1) ||
            (emailUsuario.search(" ") !== -1) ||
            (emailDominio.search(" ") !== -1) ||
            (emailDominio.search(".") === -1) ||
            (emailDominio.indexOf(".") <= -1) ||
            (emailDominio.lastIndexOf(".") > emailDominio.length - 1)) {
            this.criaErro(campo, 'Email inválido');
            valid = false;
        }

        if (dados === null) {
            valid = true;
        } else {
            for (let i = 0; i < dados.length; i++) {
                if (campo.value === dados[i].email) {
                    this.criaErro(campo, 'email já cadastrado');
                    return false;

                }
            }
        }
        return valid;
    }

    validaCPF(campo) {
        let valid = true;
        const cpf = new ValidaCPF(campo.value);
        const dados = JSON.parse(localStorage.getItem("dadosUsuario"));
        if (!cpf.validacaoCPF()) {
            this.criaErro(campo, 'CPF inválido');
            return false;
        }
        if (dados === null) {
            valid = true;
        } else {
            for (let i = 0; i < dados.length; i++) {
                if (cpf.novoCPF === dados[i].cpf.replace(/\D+/g, '')) {
                    this.criaErro(campo, 'CPJ já cadastrado');
                    return false;
                }
            }
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

class Usuario {
    constructor() {
        this.formulario = document.querySelector('.formulario-cadastro');
        this.criaUsuarios();
    }

    compatibilidadeBrowsers() {
        let httpRequest;
        if (window.XMLHttpRequest) { // Mozilla, Safari, ...
            httpRequest = new XMLHttpRequest();
        } else if (window.ActiveXObject) { // IE 8 and older
            httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
        }
        this.request(httpRequest);
    }

    request(httpRequest) {
        httpRequest.onreadystatechange = function () {

        }
    }


    criaUsuarios() {
        const nomeUser = this.formulario.querySelector('.nome');
        const ruaUser = this.formulario.querySelector('.rua');
        const numCasaUser = this.formulario.querySelector('.num-casa');
        const bairroUser = this.formulario.querySelector('.bairro');
        const cidadeUser = this.formulario.querySelector('.cidade');
        const estadoUser = this.formulario.querySelector('.estado');
        const cpfUser = this.formulario.querySelector('.cpf');
        const emailUser = this.formulario.querySelector('.email');
        const telefoneUser = this.formulario.querySelector('.telefone');
        const senhaUser = this.formulario.querySelector('.senha');
        const confirmarSenha = this.formulario.querySelector('.confirmar-senha');

        let dados = JSON.parse(localStorage.getItem("dadosUsuario"));


        if (dados === null) {
            localStorage.setItem("dadosUsuario", "[]");
            dados = [];
        }

        let usuarios = {
            nome: nomeUser.value,
            endereco: {
                rua: ruaUser.value,
                numero: numCasaUser.value,
                bairro: bairroUser.value,
                cidade: cidadeUser.value,
                estado: estadoUser.value
            },
            cpf: cpfUser.value,
            email: emailUser.value,
            telefone: telefoneUser.value,
            senha: senhaUser.value
        }
        dados.push(usuarios);

        localStorage.setItem("dadosUsuario", JSON.stringify(dados));
        alert(`Usuario: ${usuarios.nome} criado!`);

        nomeUser.value = "";
        ruaUser.value = "";
        numCasaUser.value = "";
        bairroUser.value = "";
        cidadeUser.value = "";
        estadoUser.value = "";
        cpfUser.value = "";
        emailUser.value = "";
        telefoneUser.value = "";
        senhaUser.value = "";
        confirmarSenha.value = "";
        window.location.href = "./login.html";

    }


}

const valida = new ValidaFormulario();
