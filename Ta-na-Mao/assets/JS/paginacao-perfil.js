
document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();
    if (tag === 'a') {
        e.preventDefault();
        carregaPagina(el);
    }
});

async function carregaPagina(el) {
    const href = el.getAttribute('href');
    fetch(href)
        .then(response => {
            if (response.status !== 200) throw new Error(`Erro ${response.status}`);
            return response.text();
        })
        .then(html => carregaResultado(html))
        .then(userLogado => {
            if (href === './perfil-anunciante.html') {
                let userLogado = JSON.parse(localStorage.getItem('userLogado'));
                const exibirNome = document.querySelector('.exibir-nome');
                const exibirCPF = document.querySelector('.exibir-cpf');
                const exibirEmail = document.querySelector('.exibir-email');
                const exibirTelefone = document.querySelector('.exibir-telefone');
                const exibirEndereco = document.querySelector('.exibir-endereco');
                exibirNome.appendChild(document.createTextNode(userLogado.nome));
                exibirCPF.appendChild(document.createTextNode(userLogado.cpf));
                exibirEmail.appendChild(document.createTextNode(userLogado.email));
                exibirTelefone.appendChild(document.createTextNode(userLogado.telefone));
                exibirEndereco.appendChild(
                    document.createTextNode(`${userLogado.endereco.rua}, ${userLogado.endereco.numCasa} - 
                    ${userLogado.endereco.bairro}, ${userLogado.endereco.cidade} - ${userLogado.endereco.estado}`)
                );
            }
            if (href === './meus-anuncios.html') {
                function anuncios() {
                    const listMeusAnuncios = document.querySelector('.meus-anuncios');
                    let meusAnuncios = JSON.parse(localStorage.getItem('meusAnuncios'));
                    const userLogado = JSON.parse(localStorage.getItem('userLogado'));

                    if (meusAnuncios !== null) {

                        for (let i = 0; i < meusAnuncios.length; i++) {
                            if (userLogado.cpf === meusAnuncios[i].cpfUsuario) {
                                const div = document.createElement('div');
                                div.classList.add('meu-anuncio');

                                const divImgAnuncio = document.createElement('div');
                                divImgAnuncio.classList.add('campo-img-anuncio');
                                const imgAnuncio = document.createElement('img');
                                imgAnuncio.setAttribute("id", "img-anuncio");
                                imgAnuncio.setAttribute("alt", meusAnuncios[i].descricaoImg);
                                const img = meusAnuncios[i].imgAnuncio;
                                imgAnuncio.setAttribute("src", img);

                                divImgAnuncio.appendChild(imgAnuncio);

                                const divDadosAnuncio = document.createElement("div");
                                divDadosAnuncio.classList.add("dados-anuncio");

                                const divTituloAnuncio = document.createElement('div');
                                divTituloAnuncio.classList.add('titulo-anuncio');
                                const h4Titulo = document.createElement('h4');
                                const textH4Titulo = `${meusAnuncios[i].tituloAnuncio}`;
                                h4Titulo.innerText = textH4Titulo;
                                divTituloAnuncio.appendChild(h4Titulo);

                                const divNomeAnunciante = document.createElement('div');
                                divNomeAnunciante.classList.add('nome-anunciante');
                                const titleTag = document.createElement('h5');
                                titleTag.innerText = `Anunciante:`;
                                const nomeAnunciante = document.createElement('p');
                                nomeAnunciante.innerText = `${meusAnuncios[i].nomeVendedor}`;
                                divNomeAnunciante.appendChild(titleTag);
                                divNomeAnunciante.appendChild(nomeAnunciante);

                                const divValorAnuncio = document.createElement('div');
                                divValorAnuncio.classList.add('valor-anuncio');
                                const titleTag2 = document.createElement('h5');
                                titleTag2.innerText = `Preço:`;
                                const valorAnuncio = document.createElement('p');
                                valorAnuncio.innerText = `R$${meusAnuncios[i].valor}`;
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
                                contatoAnunciante.innerText = `${meusAnuncios[i].contatoVendedor}`;
                                contentTelAnunciante.appendChild(logoTel);
                                contentTelAnunciante.appendChild(titleTag3);
                                divTelefoneAnunciante.appendChild(contentTelAnunciante);
                                divTelefoneAnunciante.appendChild(contatoAnunciante);

                                const divDescricaoAnuncio = document.createElement('div');
                                divDescricaoAnuncio.classList.add('text-descricao-anuncio');
                                const titleTag4 = document.createElement('h5');
                                titleTag4.innerText = `Descrição:`;
                                const descricaoAnuncio = document.createElement('p');
                                descricaoAnuncio.innerText = `${meusAnuncios[i].descricaoAnuncio}`;
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
                                divDadosAnuncio.appendChild(divDescricaoAnuncio);
                                divDadosAnuncio.appendChild(divTelefoneAnunciante);
                                div.appendChild(btnExcluir);
                                div.appendChild(divImgAnuncio);
                                div.appendChild(divDadosAnuncio);
                                listMeusAnuncios.appendChild(div);
                            }
                        }

                        const btnExcluirAnuncio = document.querySelectorAll("#btn-excluir-anuncio");
                        document.addEventListener("click", e => {
                            let eventoExcluir = e.target;
                            if (eventoExcluir.classList.value === "btn-excluir-anuncio") {
                                const btnExcluir = eventoExcluir;
                                let id = btnExcluir.id;
                                for (const key in meusAnuncios) {
                                    if (key === id) {
                                        let anunciosGerais = JSON.parse(localStorage.getItem('anunciosGerais'));
                                        let anunciosProdutos = JSON.parse(localStorage.getItem('anunciosProdutos'));
                                        let anunciosServicos = JSON.parse(localStorage.getItem('anunciosServiços'));
                                        if (anunciosGerais !== null) {
                                            for (let j = 0; j < anunciosGerais.length; j++) {

                                                if (meusAnuncios[key].imgAnuncio === anunciosGerais[j].imgAnuncio
                                                    && meusAnuncios[key].tituloAnuncio === anunciosGerais[j].tituloAnuncio) {
                                                    anunciosGerais.splice(j, 1);
                                                    localStorage.setItem("anunciosGerais", JSON.stringify(anunciosGerais));
                                                }
                                            }
                                        }
                                        if (anunciosProdutos !== null) {
                                            for (let j = 0; j < anunciosProdutos.length; j++) {

                                                if (meusAnuncios[key].imgAnuncio === anunciosProdutos[j].imgAnuncio
                                                    && meusAnuncios[key].tituloAnuncio === anunciosProdutos[j].tituloAnuncio) {
                                                    anunciosProdutos.splice(j, 1);
                                                    localStorage.setItem("anunciosProdutos", JSON.stringify(anunciosProdutos));
                                                }
                                            }
                                        }
                                        if (anunciosServicos !== null) {
                                            for (let j = 0; j < anunciosServicos.length; j++) {

                                                if (meusAnuncios[key].imgAnuncio === anunciosServicos[j].imgAnuncio
                                                    && meusAnuncios[key].tituloAnuncio === anunciosServicos[j].tituloAnuncio) {
                                                    anunciosServicos.splice(j, 1);
                                                    localStorage.setItem("anunciosServiços", JSON.stringify(anunciosServicos));
                                                }
                                            }
                                        }

                                        meusAnuncios.splice(key, 1);
                                        localStorage.setItem("meusAnuncios", JSON.stringify(meusAnuncios));
                                        location.reload();
                                    }
                                }
                            }
                        });
                    }
                }
                anuncios();
            }
        })
        .catch(e => console.log(e));


}


function carregaResultado(response) {
    const resultado = document.querySelector('.corpo-conteudo');
    resultado.innerHTML = response;
}

