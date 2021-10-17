const btnMobile = document.getElementById('btn-mobile');

function menuToggle(event){
    if (event.type === 'touchstart') event.preventDefault();
    /* se o tipo do evento for o evento de touchstart, previne o padrao, nao ativa nada mais */

    const nav = document.getElementById('nav');
    /* agora vamos criar uma classe active na nav*/

    nav.classList.toggle('active');
    /* toggle significa caso nao tenha adicione caso tenha remova*/

   
}

btnMobile.addEventListener('click', menuToggle);
/*ao clicar ative a seguinte função*/
btnMobile.addEventListener('touchstart', menuToggle);






