var numRnd1 = Math.floor((Math.random()*671)+1);
var numRnd2 = Math.floor((Math.random()*671)+1);
var numRnd3 = Math.floor((Math.random()*671)+1);
var numRnd4 = Math.floor((Math.random()*671)+1);
var numRnd5 = Math.floor((Math.random()*671)+1);

//imagen 1
var url1='https://rickandmortyapi.com/api/character/'+numRnd1;

fetch(url1).then(response => response.json() )
.then(data =>{
    let img1=data.image;
    let nomb=data.name;
    let gene=data.gender;
    let espe=data.species;
    let orig=data.origin.name;
    let imagenDOM =document.getElementById('img1');
    let nombreDOM = document.getElementById('nombre1');
    let descripcionDOM = document.getElementById('desc1');
    imagenDOM.setAttribute('src',img1);
    imagenDOM.setAttribute('alt',nomb);
    nombreDOM.innerHTML=nomb;
    descripcionDOM.innerHTML=`It's a ${espe} ${gene} and it's from ${orig} `;
}).catch(err => console.log(err));

//imagen 2
var url2='https://rickandmortyapi.com/api/character/'+numRnd2;

fetch(url2).then(response => response.json() )
.then(data =>{
    let img2=data.image;
    let nomb=data.name;
    let gene=data.gender;
    let espe=data.species;
    let orig=data.origin.name;
    let imagenDOM =document.getElementById('img2');
    let nombreDOM = document.getElementById('nombre2');
    let descripcionDOM = document.getElementById('desc2');
    imagenDOM.setAttribute('src',img2);
    imagenDOM.setAttribute('alt',nomb);
    nombreDOM.innerHTML=nomb;
    descripcionDOM.innerHTML=`It's a ${espe} ${gene} and it's from ${orig} `;
}).catch(err => console.log(err));

//imagen 3
var url3='https://rickandmortyapi.com/api/character/'+numRnd3;

fetch(url3).then(response => response.json() )
.then(data =>{
    let img3=data.image;
    let nomb=data.name;
    let gene=data.gender;
    let espe=data.species;
    let orig=data.origin.name;
    let imagenDOM =document.getElementById('img3');
    let nombreDOM = document.getElementById('nombre3');
    let descripcionDOM = document.getElementById('desc3');
    imagenDOM.setAttribute('src',img3);
    imagenDOM.setAttribute('alt',nomb);
    nombreDOM.innerHTML=nomb;
    descripcionDOM.innerHTML=`It's a ${espe} ${gene} and it's from ${orig} `;
}).catch(err => console.log(err));

//imagen 4
var url4='https://rickandmortyapi.com/api/character/'+numRnd4;

fetch(url4).then(response => response.json() )
.then(data =>{
    let img4=data.image;
    let nomb=data.name;
    let gene=data.gender;
    let espe=data.species;
    let orig=data.origin.name;
    let imagenDOM =document.getElementById('img4');
    let nombreDOM = document.getElementById('nombre4');
    let descripcionDOM = document.getElementById('desc4');
    imagenDOM.setAttribute('src',img4);
    imagenDOM.setAttribute('alt',nomb);
    nombreDOM.innerHTML=nomb;
    descripcionDOM.innerHTML=`It's a ${espe} ${gene} and it's from ${orig} `;
}).catch(err => console.log(err));

//imagen 5
var url5='https://rickandmortyapi.com/api/character/'+numRnd5;

fetch(url5).then(response => response.json() )
.then(data =>{
    let img5=data.image;
    let nomb=data.name;
    let gene=data.gender;
    let espe=data.species;
    let orig=data.origin.name;
    let imagenDOM =document.getElementById('img5');
    let nombreDOM = document.getElementById('nombre5');
    let descripcionDOM = document.getElementById('desc5');
    imagenDOM.setAttribute('src',img5);
    imagenDOM.setAttribute('alt',nomb);
    nombreDOM.innerHTML=nomb;
    descripcionDOM.innerHTML=`It's a ${espe} ${gene} and it's from ${orig} `;
}).catch(err => console.log(err));