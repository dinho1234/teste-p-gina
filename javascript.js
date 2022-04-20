let botao = document.querySelector("#help-botao")
let menu = document.querySelector(".secao-container")  

function fechar(){
    if(menu.style.display == "block"){
        menu.style.display = "none";
        botao.style.background = "rgb(53, 53, 53)";
        botao.style.border_color= "rgb(161, 224, 243)";

    } else {
        menu.style.display = "block";
        botao.style.color= "rgb(161, 224, 243)";
        botao.style.background= "black";
        botao.style.border_color= "white";

    }
    console.log("Ok");

}
botao.addEventListener("click", fechar)


let botaocalcula = document.querySelector(".calcula-rpm");
let rpm = document.querySelector(".resultado-rpm");

function mouseEnter(){
    botaocalcula.style.background = "rgba(77, 77, 77, 0.642)";
}

function mouseOut(){
    botaocalcula.style.background = "rgba(0, 0, 0, 0.678)";
}

function clicou(){
    let diametro   = Number(document.querySelector(".input-diametro").value);
    let velocidade = Number(document.querySelector(".input-velocidade").value);
    botaocalcula.style.background = "rgba(100, 0, 0, 0.678)";
    let res = velocidade * 318.4 / diametro
    rpm.value = (res.toFixed(0) + " Rotações/minuto");
}