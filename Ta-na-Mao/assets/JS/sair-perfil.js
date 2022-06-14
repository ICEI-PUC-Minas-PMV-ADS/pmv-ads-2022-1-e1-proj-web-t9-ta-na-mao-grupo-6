 class Sair{
     constructor(){
         this.sair();
     }
     
     sair(){
         const logout = document.querySelector('.sair-perfil');

         logout.addEventListener('click', e => {
             localStorage.removeItem('token');
             localStorage.removeItem('userLogado');
             window.location.href = '.index.html';
         });
     }
 }

 const sair = new Sair();