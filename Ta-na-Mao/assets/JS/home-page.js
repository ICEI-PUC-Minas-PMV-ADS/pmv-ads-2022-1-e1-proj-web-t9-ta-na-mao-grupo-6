class EventosCliques {
    constructor() {
        this.evento();
    }

    evento() {
        const btnFiltro = document.querySelector("#btn-menu-filtro");
        const listaFiltro = document.querySelector('.lista-filtro');
        btnFiltro.addEventListener('click', e => {
            listaFiltro.classList.toggle('active');
        })
    }
}

const evCliques = new EventosCliques();