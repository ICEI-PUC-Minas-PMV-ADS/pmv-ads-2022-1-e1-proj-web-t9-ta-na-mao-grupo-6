class Menu{
    constructor(){
        this.evento();
    }

    evento(){
        const btnMenu = document.querySelector('.btn-menu-navbar');
        const listMenu = document.querySelector('.list-items-menu')
        btnMenu.addEventListener('click', e => {
            listMenu.classList.toggle('active');
        })
    }
}

const menu = new Menu();