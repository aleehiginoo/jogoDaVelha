var letra = "X";
var quadrados = [];

function botaoClicado(clicado){
    
    
    //var tipoP = document.createElement("P");
    var quad =  document.getElementById('quadrado-'+ clicado);
    var escreverLetra = document.createTextNode(letra);
    quad.appendChild(escreverLetra);
    
    document.getElementById('quadrado-'+ clicado).onclick = false;
    

    if(letra === "X")
        letra = "O";

    else if(letra === "O")
       letra = "X";

    quadrados[clicado] = document.querySelector(".quadrado-jogo-velha#quadrado-"+clicado).textContent;

    verifica();
    
}

function verifica(){

    if((quadrados[4] && ((quadrados[0] == quadrados[4] && quadrados[4] == quadrados[8])  ||
                         (quadrados[2] == quadrados[4] && quadrados[4] == quadrados[6])   ||
                         (quadrados[1] == quadrados[4] && quadrados[4] == quadrados[7])   ||
                         (quadrados[3] == quadrados[4] && quadrados[4] == quadrados[5]))) ||
       (quadrados[0] && ((quadrados[0] == quadrados[1] && quadrados[1] == quadrados[2])   ||
                         (quadrados[0] == quadrados[3] && quadrados[3] == quadrados[6]))) ||
       (quadrados[8] && ((quadrados[8] == quadrados[7] && quadrados[7] == quadrados[6])   ||
                         (quadrados[8] == quadrados[5] && quadrados[5] == quadrados[2])))        
    ) 
       {
           alert("Venceu");
       }

}