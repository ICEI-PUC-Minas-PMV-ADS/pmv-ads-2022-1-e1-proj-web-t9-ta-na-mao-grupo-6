class Login {
    constructor() {
        this.eventos();
        
    }

    eventos() {
        const btnLogar = document.getElementById("btn-login");
        btnLogar.addEventListener('click', e => {
            this.handleSubmit(e);
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.verificacao();
    }

    verificacao() {
        const email = document.getElementById("login-email");
        const senha = document.getElementById("login-password");
        const divLogin = document.querySelector('.input-email-login');

        for (let errorText of divLogin.querySelectorAll('.error-text')) {
            errorText.remove();
        }


        if (!email.value) {
            this.criaErro(email, 'Digite o email e a senha');
            return false;
        }
        if (!senha.value) {
            this.criaErro(senha, 'Senha inválida');
            return false;
        }

        return this.acessoLogin(email, senha);
    }

    criaErro(campo, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div);

    }


    acessoLogin(email, senha) {
        const usuarios = JSON.parse(localStorage.getItem("dadosUsuario"));
        const divLogin = document.querySelector('.input-email-login');
        let validUser = {
            nome: '',
            email: '',
            senha: ''
        }

        for (let errorText of divLogin.querySelectorAll('.error-text')) {
            errorText.remove();
        }

        usuarios.forEach((item) => {
            if(email.value === item.email && senha.value === item.senha){
                validUser = {
                    nome: item.nome,
                    cpf: item.cpf,
                    email: item.email,
                    telefone: item.telefone,
                    senha: item.senha,
                    endereco: {
                        rua: item.endereco.rua,
                        numCasa: item.endereco.numero,
                        bairro: item.endereco.bairro,
                        cidade: item.endereco.cidade,
                        estado: item.endereco.estado
                    }
                }
            }
        });

        if(email.value === validUser.email && senha.value === validUser.senha){
            let token = Math.random().toString(16).substring(2);
            localStorage.setItem('token', token);
            console.log('PQP q merda');
            localStorage.setItem('userLogado', JSON.stringify(validUser))
            window.location.href = 'home-page-logado.html';
        }else {
            this.criaErro(email, 'Senha ou email inválido.');
            email.focus();
            email.setAttribute('style', 'box-shadow: 0 0 1rem red');
            email.setAttribute('style', 'box-shadow: 0 0 1rem red');
        }

    }
}

const login = new Login();

