function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento != null && elemento.localName === 'audio' ){
            elemento.play();
    }
    else{
        console.log('Elemento não encontrado ou seletor inválido');

    }
}

const ListaDeTeclas = document.querySelectorAll('.tecla');


//para 
for (let contador = 0; contador < ListaDeTeclas.length; contador++) {

    const tecla = ListaDeTeclas[contador];
    const instrumentro = tecla.classList[1];
    //Template String
    const idAudio = `#som_${instrumentro}`;
    //console.log(idAudio);


    tecla.onclick = function () {
        tocaSom(idAudio);
    }
    //console.log(contador);

    //quando o usuario clicar
    tecla.onkeydown = function (evento) {

        if(evento.code ==='Space' || evento.code ==='Enter' ){
            tecla.classList.add('ativa');

        }
        
    }

    //quando do usuario parar de clicar
    tecla.onkeyup = function() {
        tecla.classList.remove('ativa');

    }

}


//--------------------------- FORMA DE REPETIÇÃO---------------------------------------
// function tocaSomClap(){
//     document.querySelector('#som_tecla_clap').play();
// }
// function tocaSomTim(){
//     document.querySelector('#som_tecla_tim').play();
// }
// function tocaSomPuff(){
//     document.querySelector('#som_tecla_puff').play();
// }
// function tocaSomSplash(){
//     document.querySelector('#som_tecla_splash').play();
// }
// function tocaSomToim(){
//     document.querySelector('#som_tecla_toim').play();
// }
// function tocaSomPsh(){
//     document.querySelector('#som_tecla_psh').play();
// }
// function tocaSomTic(){
//     document.querySelector('#som_tecla_tic').play();
// }
// function tocaSomTom(){
//     document.querySelector('#som_tecla_tom').play();
// }

// document.querySelector('.tecla_pom').onclick = tocaSomPon;
// document.querySelector('.tecla_clap').onclick = tocaSomClap;
// document.querySelector('.tecla_tim').onclick = tocaSomTim;
// document.querySelector('.tecla_puff').onclick = tocaSomPuff;
// document.querySelector('.tecla_splash').onclick = tocaSomSplash;
// document.querySelector('.tecla_toim').onclick = tocaSomToim;
// document.querySelector('.tecla_psh').onclick = tocaSomPsh;
// document.querySelector('.tecla_tic').onclick = tocaSomTic;
// document.querySelector('.tecla_tom').onclick = tocaSomTom;

