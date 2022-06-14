class Filtro {
    constructor() {
        const anunciosGerais = JSON.parse(localStorage.getItem("anunciosGerais"));
        this.filtrar(anunciosGerais);
    }

    filtrar(anunciosGerais) {
        const inputFiltro = document.querySelector("#input-filtro");
        inputFiltro.addEventListener('input', e => {
            const inputValue = e.target.value.trim().toLowerCase();
            const filterAnuncios = anunciosGerais
                .filter(titulo => titulo.tituloAnuncio.toLowerCase().includes(inputValue));
            this.criaAnuncio(filterAnuncios, inputValue);
        });

    }

    async criaAnuncio(filterAnuncios, inpuntValue) {
        const href = window.location.pathname;
        fetch(href)
            .then(anuncioFiltrado => {
                if (href === "/index.html" || href === "/home-page-logado.html") {
                    const anunciosFiltrados = document.querySelector(".anuncios-filtrados");
                    if (filterAnuncios.length !== 0) {
                        if (anunciosFiltrados.getElementsByClassName('meu-anuncio') !== null) anunciosFiltrados.innerHTML = "";
                        for (let i = 0; i < filterAnuncios.length; i++) {

                            if (inpuntValue !== "") {
                                const div = document.createElement('div');
                                div.classList.add('meu-anuncio');

                                const divImgAnuncio = document.createElement('div');
                                divImgAnuncio.classList.add('campo-img-anuncio');
                                const imgAnuncio = document.createElement('img');
                                imgAnuncio.setAttribute("id", "img-anuncio");
                                imgAnuncio.setAttribute("alt", filterAnuncios[i].descricaoAnuncio);
                                const img = filterAnuncios[i].imgAnuncio;
                                imgAnuncio.setAttribute("src", img);

                                divImgAnuncio.appendChild(imgAnuncio);

                                const divDadosAnuncio = document.createElement("div");
                                divDadosAnuncio.classList.add("dados-anuncio");

                                const divTituloAnuncio = document.createElement('div');
                                divTituloAnuncio.classList.add('titulo-anuncio');
                                const h4Titulo = document.createElement('h4');
                                const textH4Titulo = `${filterAnuncios[i].tituloAnuncio}`;
                                h4Titulo.innerText = textH4Titulo;
                                divTituloAnuncio.appendChild(h4Titulo);

                                const divNomeAnunciante = document.createElement('div');
                                divNomeAnunciante.classList.add('nome-anunciante');
                                const titleTag = document.createElement('h5');
                                titleTag.innerText = `Anunciante:`;
                                const nomeAnunciante = document.createElement('p');
                                nomeAnunciante.innerText = `${filterAnuncios[i].nomeVendedor}`;
                                divNomeAnunciante.appendChild(titleTag);
                                divNomeAnunciante.appendChild(nomeAnunciante);

                                const divValorAnuncio = document.createElement('div');
                                divValorAnuncio.classList.add('valor-anuncio');
                                const titleTag2 = document.createElement('h5');
                                titleTag2.innerText = `Valor:`;
                                const valorAnuncio = document.createElement('p');
                                valorAnuncio.innerText = `R$${filterAnuncios[i].valor}`;
                                divValorAnuncio.appendChild(titleTag2);
                                divValorAnuncio.appendChild(valorAnuncio);


                                const divTelefoneAnunciante = document.createElement('div');
                                divTelefoneAnunciante.classList.add('telefone-anunciante');
                                const titleTag3 = document.createElement('h5');
                                titleTag3.innerText = `Telefone:`;
                                const contatoAnunciante = document.createElement('p');
                                contatoAnunciante.innerText = `${filterAnuncios[i].contatoVendedor}`;
                                divTelefoneAnunciante.appendChild(titleTag3);
                                divTelefoneAnunciante.appendChild(contatoAnunciante);


                                const divDescricaoAnuncio = document.createElement('div');
                                divDescricaoAnuncio.classList.add('text-descricao-anuncio');
                                const titleTag4 = document.createElement('h5');
                                titleTag4.innerText = `Descrição:`;
                                const descricaoAnuncio = document.createElement('p');
                                descricaoAnuncio.innerText = `${filterAnuncios[i].descricaoAnuncio}`;
                                divDescricaoAnuncio.appendChild(titleTag4);
                                divDescricaoAnuncio.appendChild(descricaoAnuncio);

                                const numeroAnuncio = i;
                                const stringNumero = numeroAnuncio.toString();

                                const btnExcluir = document.createElement("button");
                                btnExcluir.innerText = "X";
                                btnExcluir.classList.add("btn-excluir-anuncio");
                                btnExcluir.id = stringNumero;

                                divDadosAnuncio.appendChild(divTituloAnuncio);
                                divDadosAnuncio.appendChild(divNomeAnunciante);
                                divDadosAnuncio.appendChild(divValorAnuncio);
                                divDadosAnuncio.appendChild(divTelefoneAnunciante);
                                divDadosAnuncio.appendChild(divDescricaoAnuncio);
                                div.appendChild(btnExcluir);
                                div.appendChild(divImgAnuncio);
                                div.appendChild(divDadosAnuncio);
                                anunciosFiltrados.appendChild(div);
                            }

                        }
                    }
                }
            })
            .catch(e => console.log(e));
    }

    criaErro(campo, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div);

    }

}

const filtro = new Filtro();