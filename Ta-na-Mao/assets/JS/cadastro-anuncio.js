let uploadedImage = "";
let viewImg = document.querySelector(".img-anuncio");
document.querySelector("#input-img-anuncio").addEventListener("change", function () {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        uploadedImage = reader.result;
        viewImg.style.backgroundSize = "100%";
        viewImg.style.backgroundPosition = "center center";
        viewImg.style.backgroundRepeat = "no-repeat";
        viewImg.style.backgroundImage = `url(${uploadedImage})`;
    });
    reader.readAsDataURL(this.files[0]);
});

class Anuncio {
    constructor() {
        this.formulario = document.querySelector('.formulario-anuncio');
        this.criaAnuncio();
    }

    criaAnuncio() {
        const imgAnuncio = uploadedImage;
        const inputTipoAnuncio = document.querySelectorAll(".layout-tipo-anuncio input");
        let tipoAnuncio = "";
        for (let i = 0; i < inputTipoAnuncio.length; i++) {
            if (inputTipoAnuncio[i].checked) {

                if (inputTipoAnuncio[i].id === "anuncio-produto") {
                    tipoAnuncio = inputTipoAnuncio[i].previousElementSibling.innerText
                }
                if (inputTipoAnuncio[i].id === "anuncio-servico") {
                    tipoAnuncio = inputTipoAnuncio[i].previousElementSibling.innerText
                }
            }
        }
        const tituloAnuncio = this.formulario.querySelector("#titulo-anuncio");
        const nomeVendedor = this.formulario.querySelector("#vendedor-anuncio")
        const contatoAnunciante = this.formulario.querySelector("#contato-anunciante");
        const valor = this.formulario.querySelector("#valor-anuncio");
        const descricaoAnuncio = this.formulario.querySelector("#descricao-anuncio");
        const descricaoImg = this.formulario.querySelector("#descricao-img-anuncio");
        const userLogado = JSON.parse(localStorage.userLogado);
        let anunciosGerais = JSON.parse(localStorage.getItem("anunciosGerais"));


        if (anunciosGerais === null) {
            localStorage.setItem("anunciosGerais", "[]");
            anunciosGerais = [];
        }

        let criaAnuncios = {
            nomeUsuario: userLogado.nome,
            cpfUsuario: userLogado.cpf,
            tipoAnuncio: tipoAnuncio,
            tituloAnuncio: tituloAnuncio.value,
            nomeVendedor: nomeVendedor.value,
            contatoVendedor: contatoAnunciante.value,
            valor: valor.value,
            descricaoAnuncio: descricaoAnuncio.value,
            imgAnuncio: imgAnuncio,
            descricaoImg: descricaoImg.value
        }

        anunciosGerais.push(criaAnuncios);
        localStorage.setItem("anunciosGerais", JSON.stringify(anunciosGerais));
        alert(`Anúncio: ${criaAnuncios.tituloAnuncio} foi criado!`);

        if (userLogado !== null) {
            let meusAnuncios = JSON.parse(localStorage.getItem("meusAnuncios"));

            if (meusAnuncios === null) {
                localStorage.setItem("meusAnuncios", "[]");
                meusAnuncios = [];
            }

            meusAnuncios.push(criaAnuncios);
            localStorage.setItem("meusAnuncios", JSON.stringify(meusAnuncios));
        }

        if (tipoAnuncio === 'Produto') {
            let anunciosProdutos = JSON.parse(localStorage.getItem("anunciosProdutos"));

            if (anunciosProdutos === null) {
                localStorage.setItem("anunciosProdutos", "[]");
                anunciosProdutos = [];
            }

            anunciosProdutos.push(criaAnuncios);
            localStorage.setItem("anunciosProdutos", JSON.stringify(anunciosProdutos));
        }

        if (tipoAnuncio === 'Serviço') {
            let anunciosServiços = JSON.parse(localStorage.getItem("anunciosServiços"));

            if (anunciosServiços === null) {
                localStorage.setItem("anunciosServiços", "[]");
                anunciosServiços = [];
            }

            anunciosServiços.push(criaAnuncios);
            localStorage.setItem("anunciosServiços", JSON.stringify(anunciosServiços));
        }

        tituloAnuncio.value = "";
        nomeVendedor.value = "";
        contatoAnunciante.value = "";
        valor.value = "";
        descricaoAnuncio.value = "";
        descricaoImg.value = "";
        viewImg.style.backgroundImage = "none";
    }
}



