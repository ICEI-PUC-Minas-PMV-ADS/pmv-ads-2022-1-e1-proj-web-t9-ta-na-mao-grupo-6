class DadosUser{
    constructor(){
        const div = document.querySelector('.teste');
        this.evento(div);
    }

    evento(div){
        let userLogado = JSON.parse(localStorage.getItem('userLogado'));
        console.log(userLogado.cpf);
        div.innerText = userLogado.nome;
    }
}




