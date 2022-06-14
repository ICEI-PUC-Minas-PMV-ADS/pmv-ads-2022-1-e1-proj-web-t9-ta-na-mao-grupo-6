const userName = document.querySelector('.nome');
const userRua = document.querySelector('.rua');
const userNumCasa = document.querySelector('.num-casa');
const userBairro = document.querySelector('.bairro');
const userCidade = document.querySelector('.cidade');
const userEstado = document.querySelector('.estado');
const userCpf = document.querySelector('.cpf');
const userEmail = document.querySelector('.email');
const userTelefone = document.querySelector('.telefone');
const userSenha = document.querySelector('.senha');
const userConfirmaSenha = document.querySelector('.confirmar-senha');
const userLogado = JSON.parse(localStorage.getItem('userLogado'));
userName.value = userLogado.nome;
userRua.value = userLogado.endereco.rua;
userNumCasa.value = userLogado.endereco.numCasa;
userBairro.value = userLogado.endereco.bairro;
userCidade.value = userLogado.endereco.estado;
userEstado.value = userLogado.endereco.cidade;
userCpf.value = userLogado.cpf;
userEmail.value = userLogado.email;
userTelefone.value = userLogado.telefone;
userSenha.value = userLogado.senha;



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
            const criaUsuario = new AtualizaDados();
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

        if (telefone.replace(/\D/g, "").length !== 11 && !telefone.match(validaTel)) {
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
        }
        if (campo.value !== userLogado.email) {
            this.criaErro(campo, 'Email não pode ser alterado');
            return false;
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
        }
        if (campo.value !== userLogado.cpf) {
            console.log(userLogado.cpf);
            this.criaErro(campo, 'CPJ não pode ser alterado.');
            return false;
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

class AtualizaDados {
    constructor() {
        this.atualiza();
    }

    atualiza() {
        const dadosUsuario = JSON.parse(localStorage.getItem("dadosUsuario"));
        const meusAnuncios = JSON.parse(localStorage.getItem("meusAnuncios"));
        const anunciosGerais = JSON.parse(localStorage.getItem("anunciosGerais"));
        const anunciosProdutos = JSON.parse(localStorage.getItem("anunciosProdutos"));
        const anunciosServicos = JSON.parse(localStorage.getItem("anunciosServiços"));
        let i;

        if (meusAnuncios !== null) {
            for (i = 0; i < meusAnuncios.length; ++i) {
                if (meusAnuncios[i].nomeUsuario === userLogado.nome) {
                    meusAnuncios[i].nomeUsuario = userName.value;
                    localStorage.setItem('meusAnuncios', JSON.stringify(meusAnuncios));
                }

            }
        }
        if (anunciosGerais !== null) {
            for (i = 0; i < anunciosGerais.length; i++) {
                if (anunciosGerais[i].nomeUsuario === userLogado.nome) {
                    anunciosGerais[i].nomeUsuario = userName.value;
                    localStorage.setItem('anunciosGerais', JSON.stringify(anunciosGerais));
                }

            }
        }
        if (anunciosProdutos !== null) {
            for (i = 0; i < anunciosProdutos.length; i++) {
                if (anunciosProdutos[i].nomeUsuario === userLogado.nome) {
                    anunciosProdutos[i].nomeUsuario = userName.value;
                    localStorage.setItem('anunciosProdutos', JSON.stringify(anunciosProdutos));
                }

            }
        }
        if (anunciosServicos !== null) {
            for (i = 0; i < anunciosServicos.length; i++) {
                if (anunciosServicos[i].nomeUsuario === userLogado.nome) {
                    anunciosServicos[i].nomeUsuario = userName.value;
                    localStorage.setItem('anunciosServiços', JSON.stringify(anunciosServicos));
                }

            }
        }
        for (i = 0; i < dadosUsuario.length; i++) {
            if (userLogado.cpf === dadosUsuario[i].cpf || userLogado.email === dadosUsuario[i].email) {
                dadosUsuario[i].nome = userName.value;
                dadosUsuario[i].endereco.rua = userRua.value;
                dadosUsuario[i].endereco.numero = userNumCasa.value;
                dadosUsuario[i].endereco.bairro = userBairro.value;
                dadosUsuario[i].endereco.cidade = userCidade.value;
                dadosUsuario[i].endereco.estado = userEstado.value;
                dadosUsuario[i].cpf = userCpf.value;
                dadosUsuario[i].email = userEmail.value;
                dadosUsuario[i].telefone = userTelefone.value;
                dadosUsuario[i].senha = userSenha.value;
                localStorage.setItem('dadosUsuario', JSON.stringify(dadosUsuario));
                userLogado.nome = userName.value;
                userLogado.endereco.rua = userRua.value;
                userLogado.endereco.numCasa = userNumCasa.value;
                userLogado.endereco.bairro = userBairro.value;
                userLogado.endereco.cidade = userCidade.value;
                userLogado.endereco.estado = userEstado.value;
                userLogado.cpf = userCpf.value;
                userLogado.email = userEmail.value;
                userLogado.telefone = userTelefone.value;
                userLogado.senha = userSenha.value;
                localStorage.setItem('userLogado', JSON.stringify(userLogado));
                alert(`Dados de ${userLogado.nome} atualizados`);
                userConfirmaSenha.value = "";

            }
        }
    }
}

const valida = new ValidaFormulario();
