class Acesso {
    constructor() {
        // this.acessoPagesLogadas();
        this.acessoLogin();
    }

    acessoLogin() {
        if (localStorage.getItem("token") !== null) {
            window.location.href = "./home-page-logado.html";
        }
    }
}

const acesso = new Acesso();