class Acesso {
    constructor() {
        // this.acessoPagesLogadas();
        this.acessoLogin();
    }

    acessoLogin() {
        if (localStorage.getItem("token") === null) {
            window.location.href = "./login.html";
            alert("Precisa estar logado para acessar essa pagina");
        }
    }
}

const acesso = new Acesso();