const botaoPlayPause = document.getElementById("play-pause");
const botaoProximoCapitulo = document.getElementById("proximo");
const audio = document.getElementById("audio-capitulo");
const botaoCapituloAnterior = document.getElementById("anterior");
const quantidadeCapitulos = 30;
const nomeCapitulo = document.getElementById("capitulo");

let taTocando = false;
let capitulo = 1;

function tocarOuPausarFaixa(){
    if (taTocando === true){
        pausarFaixa();
    }else {
        tocarFaixa();
    }   
}

function tocarFaixa(){
    audio.play();
    botaoPlayPause.classList.remove("bi-play-circle");
    botaoPlayPause.classList.add("bi-pause-circle");
    taTocando = true;
}

function pausarFaixa(){
    audio.pause();
    botaoPlayPause.classList.add("bi-play-circle");
    botaoPlayPause.classList.remove("bi-pause-circle");
    taTocando = false;
}

function proximoCapitulo(){
    if (capitulo < quantidadeCapitulos){
        capitulo += 1;
    }else {
        capitulo = 1;
    }
    
    audio.src = "books/dom-casmurro/" + capitulo + ".mp3";
    tocarFaixa();
}

function capituloAnterior(){
    if (capitulo === 1){
        capitulo = quantidadeCapitulos;
    }else {
        capitulo -= 1;
    }
    
    audio.src = "books/dom-casmurro" + capitulo + ".mp3";
    tocarFaixa();
}

botaoPlayPause.addEventListener("click", tocarOuPausarFaixa);
botaoProximoCapitulo.addEventListener("click", proximoCapitulo);
botaoCapituloAnterior.addEventListener("click", capituloAnterior);
audio.addEventListener("ended", proximoCapitulo);
