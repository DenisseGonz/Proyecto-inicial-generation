const $play = document.querySelector('.play');
const $audio = document.querySelector('audio');
const $volBtn =document.querySelector('.vol-btn');
const $volRange =document.querySelector('.vol-range');
const $volumen =document.querySelector('#volumen');
const $etiquetaplay = document.querySelector('.bi-pause-fill');
const etiquetavol=document.querySelector('.bi-volume-up-fill');
const $siguiente = document.querySelector('.siguiente');
const cancion1 = document.querySelector('#cancion1');
const cancion2 = document.querySelector('#cancion2');
const cancion3 = document.querySelector('#cancion3');

//Reproducir música (se usa .item(1)
$audio.setAttribute('src',cancion1.src);
$audio.volume=0.8;
$audio.addEventListener('ended',()=>{
    let anterior = $audio.getAttribute('src');
    if(anterior == cancion1.src){
        $audio.setAttribute('src',cancion2.src);
    }else if (anterior == cancion2.src){
        $audio.setAttribute('src',cancion3.src);
    }else if(anterior==cancion3.src){
        $audio.setAttribute('src',cancion1.src);
    }else{
        console.log('Aquí hay gato encerrado');
    }
    $audio.play();
});


// Pausar o Reproducir la música.
$play.addEventListener('click',()=>{
    // Actualizar el label del botón
    let pause = $etiquetaplay.classList.contains('bi-play-fill'); 

    if(pause===false){
        $etiquetaplay.classList.replace('bi-pause-fill','bi-play-fill');
    }else{
        $etiquetaplay.classList.replace('bi-play-fill','bi-pause-fill');
    }
    // Reproducir o pausar
    pause ? $audio.play() : $audio.pause();
});

//Mostrar el rango de volumen
$volBtn.addEventListener('click',()=>{
    //falta meter la animación para mostrarlo
    let mostrar = $volRange.style.display==='initial';
    $volRange.style.display = mostrar ? $volRange.style.display='none': $volRange.style.display='initial';
});
$volRange.addEventListener("change",()=>{
    let valorVol = $volumen.value;
    $audio.volume=valorVol;
    if(valorVol==0){
        etiquetavol.classList.replace('bi-volume-up-fill','bi-volume-mute-fill');
    }else{
        etiquetavol.classList.replace('bi-volume-mute-fill', 'bi-volume-up-fill');
    }
});

//Pasar a la siguiente canción 
$siguiente.addEventListener('click', ()=>{
    let anterior = $audio.getAttribute('src');
    if(anterior == cancion1.src){
        $audio.setAttribute('src',cancion2.src);
    }else if (anterior == cancion2.src){
        $audio.setAttribute('src',cancion3.src);
    }else if(anterior==cancion3.src){
        $audio.setAttribute('src',cancion1.src);
    }else{
        console.log('Aquí hay gato encerrado');
    }
    $etiquetaplay.classList.contains('bi-play-fill') ? $etiquetaplay.classList.replace('bi-play-fill','bi-pause-fill') : $audio.play();
    $audio.play();
});