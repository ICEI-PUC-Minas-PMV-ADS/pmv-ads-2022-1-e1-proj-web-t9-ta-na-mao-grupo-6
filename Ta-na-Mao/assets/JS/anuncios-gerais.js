class AnunciosGerais {
    constructor() {
        this.criaAnuncio();
    }

    criaAnuncio() {
        const anunciosGerais = JSON.parse(localStorage.getItem('anunciosGerais'));
        const listAnuncios = document.querySelector('.anuncios-gerais');

        if (anunciosGerais !== null) {
            for (let i = 0; i < anunciosGerais.length; i++) {

                const div = document.createElement('div');
                div.classList.add('meu-anuncio');

                const divImgAnuncio = document.createElement('div');
                divImgAnuncio.classList.add('campo-img-anuncio');
                const imgAnuncio = document.createElement('img');
                imgAnuncio.setAttribute("id", "img-anuncio");
                const img = anunciosGerais[i].imgAnuncio;
                imgAnuncio.setAttribute("src", img);

                divImgAnuncio.appendChild(imgAnuncio);

                const divDadosAnuncio = document.createElement("div");
                divDadosAnuncio.classList.add("dados-anuncio");

                const divTituloAnuncio = document.createElement('div');
                divTituloAnuncio.classList.add('titulo-anuncio');
                const h4Titulo = document.createElement('h4');
                const textH4Titulo = `${anunciosGerais[i].tituloAnuncio}`;
                h4Titulo.innerText = textH4Titulo;
                divTituloAnuncio.appendChild(h4Titulo);

                const divNomeAnunciante = document.createElement('div');
                divNomeAnunciante.classList.add('nome-anunciante');
                const titleTag = document.createElement('h5');
                titleTag.innerText = `Anunciante:`;
                const nomeAnunciante = document.createElement('p');
                nomeAnunciante.innerText = `${anunciosGerais[i].nomeVendedor}`;
                divNomeAnunciante.appendChild(titleTag);
                divNomeAnunciante.appendChild(nomeAnunciante);

                const divValorAnuncio = document.createElement('div');
                divValorAnuncio.classList.add('valor-anuncio');
                const titleTag2 = document.createElement('h5');
                titleTag2.innerText = `Preço:`;
                const valorAnuncio = document.createElement('p');
                valorAnuncio.innerText = `RS${anunciosGerais[i].valor}`;
                divValorAnuncio.appendChild(titleTag2);
                divValorAnuncio.appendChild(valorAnuncio);


                const divTelefoneAnunciante = document.createElement('div');
                divTelefoneAnunciante.classList.add('telefone-anunciante');
                const contentTelAnunciante = document.createElement('div');
                contentTelAnunciante.classList.add('content-tel-anunciante');
                const logoTel = document.createElement('img');
                logoTel.classList.add('logo-tel-anunciante');
                logoTel.setAttribute('src', './assets/img/whatsapp.png');
                logoTel.setAttribute("alt", 'logo redondo, verde, com um telefne branco no meio');
                const titleTag3 = document.createElement('h5');
                titleTag3.innerText = `Telefone:`;
                const contatoAnunciante = document.createElement('p');
                contatoAnunciante.innerText = `${anunciosGerais[i].contatoVendedor}`;
                contentTelAnunciante.appendChild(logoTel);
                contentTelAnunciante.appendChild(titleTag3);
                divTelefoneAnunciante.appendChild(contentTelAnunciante);
                divTelefoneAnunciante.appendChild(contatoAnunciante);


                const divDescricaoAnuncio = document.createElement('div');
                divDescricaoAnuncio.classList.add('text-descricao-anuncio');
                const titleTag4 = document.createElement('h5');
                titleTag4.innerText = `Descrição:`;
                const descricaoAnuncio = document.createElement('p');
                descricaoAnuncio.innerText = `${anunciosGerais[i].descricaoAnuncio}`;
                divDescricaoAnuncio.appendChild(titleTag4);
                divDescricaoAnuncio.appendChild(descricaoAnuncio);


                divDadosAnuncio.appendChild(divTituloAnuncio);
                divDadosAnuncio.appendChild(divNomeAnunciante);
                divDadosAnuncio.appendChild(divValorAnuncio);
                divDadosAnuncio.appendChild(divDescricaoAnuncio);
                divDadosAnuncio.appendChild(divTelefoneAnunciante);
                div.appendChild(divImgAnuncio);
                div.appendChild(divDadosAnuncio);
                listAnuncios.appendChild(div);

            }

        }
    }
}

const anunciosGerais = new AnunciosGerais();