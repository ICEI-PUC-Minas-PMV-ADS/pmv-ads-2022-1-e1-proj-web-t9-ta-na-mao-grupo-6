const anuncios = document.getElementById("anuncios");
const anuncio = document.querySelectorAll('.anuncios-avaliados');
let left = document.querySelector("#arrow-left");
let rigth = document.querySelector("#arrow-rigth");

function CarouselAnuncios() {

    this.btnArrowRigth = () => {
        rigth.addEventListener('click', () => {
            anuncios.style.transform = 'translateX(-40vw)';
        });
    }
    this.btnArrowLeft = () => {
        left.addEventListener('click', () => {
            anuncios.style.transform = 'translateX(0)';
        });

    }
    this.translate = () => {
        this.btnArrowRigth();
        this.btnArrowLeft();
    }
}


const carousel = new CarouselAnuncios();
carousel.translate();




