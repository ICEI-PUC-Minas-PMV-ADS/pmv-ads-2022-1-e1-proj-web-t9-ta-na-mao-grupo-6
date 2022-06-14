class ExcluirPerfil {
    constructor() {
        this.excluir();
    }

    excluir() {
        document.addEventListener("click", e => {

            const el = e.target;
            const corpo = document.querySelector(".corpo-conteudo");
            const userLogado = JSON.parse(localStorage.getItem("userLogado"));
            const dadosUsuario = JSON.parse(localStorage.getItem("dadosUsuario"));
            const meusAnuncios = JSON.parse(localStorage.getItem("meusAnuncios"));
            const anunciosGerais = JSON.parse(localStorage.getItem("anunciosGerais"));
            const anunciosProdutos = JSON.parse(localStorage.getItem("anunciosProdutos"));
            const anunciosServicos = JSON.parse(localStorage.getItem("anunciosServiços"));

            if (el.classList.contains("btn-excluir-perfil")) {
                e.preventDefault();
                console.log(el);
                const div = document.createElement("div");
                div.classList.add("msg-excluir");
                const p = document.createElement("p");
                const buttonSim = document.createElement("button");
                buttonSim.classList.add("sim-excluir");
                buttonSim.classList.add("btn-excluir");
                buttonSim.innerText = "Sim";
                const buttonCancelar = document.createElement("button");
                buttonCancelar.classList.add("nao-excluir");
                buttonCancelar.classList.add("btn-excluir");
                buttonCancelar.innerText = "Cancelar";
                p.innerText = `Você deseja excluir o perfil "${userLogado.nome}"`;
                div.appendChild(p);
                div.appendChild(buttonCancelar);
                div.appendChild(buttonSim);
                corpo.appendChild(div);
            }
            if (el.classList.contains("sim-excluir")) {
                let i;
                if (meusAnuncios !== null && meusAnuncios.length > 0) {
                    for (i = 0; i < meusAnuncios.length; i++) {
                        if (meusAnuncios[i].cpfUsuario === userLogado.cpf) {
                            meusAnuncios.splice(i, 1);
                            localStorage.setItem('meusAnuncios', JSON.stringify(meusAnuncios));
                        }
                    }
                }
                if (anunciosGerais !== null && anunciosGerais.length > 0) {

                    for (i = 0; i < anunciosGerais.length; i++) {
                        if (anunciosGerais[i].cpfUsuario === userLogado.cpf) {
                            anunciosGerais.splice(i, 1);
                            localStorage.setItem('anunciosGerais', JSON.stringify(anunciosGerais));
                        }
                    }
                }
                if (anunciosProdutos !== null && anunciosProdutos.length > 0) {
                    console.log(anunciosProdutos.length);
                    for (i = 0; i < anunciosProdutos.length; i++) {
                        if (anunciosProdutos[i].cpfUsuario === userLogado.cpf) {
                            anunciosProdutos.splice(i, 1);
                            localStorage.setItem('anunciosProdutos', JSON.stringify(anunciosProdutos));
                        }
                    }
                }
                if (anunciosServicos !== null && anunciosServicos.length > 0) {
                    for (let i = 0; i < anunciosServicos.length; i++) {
                        if (anunciosServicos[i].cpfUsuario === userLogado.cpf) {
                            anunciosServicos.splice(i, 1);
                            localStorage.setItem('anunciosServiços', JSON.stringify(anunciosServicos));
                        }
                    }
                }
                for (i = 0; i < dadosUsuario.length; i++) {
                    if (dadosUsuario[i].cpf === userLogado.cpf) {
                        dadosUsuario.splice(i, 1);
                        localStorage.setItem('dadosUsuario', JSON.stringify(dadosUsuario));
                    }
                }

                localStorage.removeItem('userLogado');
                localStorage.removeItem('token');
                window.location.href = "./login.html";
            }
            if (el.classList.contains("nao-excluir")) {
                console.log("Cancelar");
                window.location.href = "./perfil.html";

            }
        })
    }
}

const excluir = new ExcluirPerfil();