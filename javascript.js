var letra = "X";
var jogX = 0, jogO = 0;
var quadrados = [];

function botaoClicado(clicado){
    
    var quad =  document.getElementById('quadrado-'+ clicado);
    var paragrafo = document.createElement("P"); 
    var escreverLetra = document.createTextNode(letra);
    paragrafo.appendChild(escreverLetra);
    quad.appendChild(paragrafo);
    
    document.getElementById('quadrado-'+ clicado).disabled = true;
    

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
           var vencedor;

           if(quadrados[4] && quadrados[0] == quadrados[4] && quadrados[4] == quadrados[8]){
                document.getElementById('quadrado-0').style.background = '#EEE1DE';
                document.getElementById('quadrado-4').style.background = '#EEE1DE';
                document.getElementById('quadrado-8').style.background = '#EEE1DE';
                if(quadrados[4] == 'X')
                    vencedor = "X";
                else vencedor = "O";
           }
           else if(quadrados[4] && quadrados[2] == quadrados[4] && quadrados[4] == quadrados[6]){
                document.getElementById('quadrado-2').style.background = '#EEE1DE';
                document.getElementById('quadrado-4').style.background = '#EEE1DE';
                document.getElementById('quadrado-6').style.background = '#EEE1DE';
                if(quadrados[4] == 'X')
                    vencedor = "X";
                else vencedor = "O";
           }
           else if(quadrados[4] && quadrados[1] == quadrados[4] && quadrados[4] == quadrados[7]){
            document.getElementById('quadrado-1').style.background = '#EEE1DE';
            document.getElementById('quadrado-4').style.background = '#EEE1DE';
            document.getElementById('quadrado-7').style.background = '#EEE1DE';
                if(quadrados[4] == 'X')
                        vencedor = "X";
                    else vencedor = "O";
           }
            else if(quadrados[4] && quadrados[3] == quadrados[4] && quadrados[4] == quadrados[5]){
                document.getElementById('quadrado-3').style.background = '#EEE1DE';
                document.getElementById('quadrado-4').style.background = '#EEE1DE';
                document.getElementById('quadrado-5').style.background = '#EEE1DE';
                if(quadrados[4] == 'X')
                    vencedor = "X";
                else vencedor = "O";
            }else if(quadrados[0] && quadrados[0] == quadrados[1] && quadrados[1] == quadrados[2]){
                document.getElementById('quadrado-0').style.background = '#EEE1DE';
                document.getElementById('quadrado-1').style.background = '#EEE1DE';
                document.getElementById('quadrado-2').style.background = '#EEE1DE';
                if(quadrados[0] == 'X')
                    vencedor = "X";
                else vencedor = "O";
            }else if(quadrados[0] && quadrados[0] == quadrados[3] && quadrados[3] == quadrados[6]){
                document.getElementById('quadrado-0').style.background = '#EEE3DE';
                document.getElementById('quadrado-3').style.background = '#EEE1DE';
                document.getElementById('quadrado-6').style.background = '#EEE1DE';
                if(quadrados[0] == 'X')
                    vencedor = "X";
                else vencedor = "O";
            }else if(quadrados[8] && quadrados[8] == quadrados[7] && quadrados[7] == quadrados[6]){
                document.getElementById('quadrado-8').style.background = '#EEE1DE';
                document.getElementById('quadrado-7').style.background = '#EEE1DE';
                document.getElementById('quadrado-6').style.background = '#EEE1DE';
                if(quadrados[8] == 'X')
                    vencedor = "X";
                else vencedor = "O";
            }else if(quadrados[8] && quadrados[8] == quadrados[5] && quadrados[5] == quadrados[2]){
                document.getElementById('quadrado-8').style.background = '#EEE1DE';
                document.getElementById('quadrado-5').style.background = '#EEE1DE';
                document.getElementById('quadrado-2').style.background = '#EEE1DE';
                if(quadrados[8] == 'X')
                    vencedor = "X";
                else vencedor = "O";
            }
            for(var i = 0; i < 9; i++)
            document.getElementById('quadrado-'+ i).disabled = true;

            var paragrafo = document.createElement('span');

            if(vencedor === "X"){
                var divVencedor =  document.getElementById('vencedor');
                var escrever = document.createTextNode("O jogador X venceu");
                paragrafo.appendChild(escrever);
                divVencedor.appendChild(paragrafo);
                jogX++;
                document.querySelector(".placar#jogX").textContent = jogX;
                letra = "O";
            }
            else{
                var divVencedor =  document.getElementById('vencedor');
                var escrever = document.createTextNode("O jogador O venceu");
                paragrafo.appendChild(escrever);
                divVencedor.appendChild(paragrafo);
                jogO++;
                document.querySelector(".placar#jogO").textContent = jogO;
                letra = "X";
            }
        }
}

function reiniciar(){
    for(var i = 0; i < 9; i++){
        var quad = document.getElementById('quadrado-'+ i);
        var paragrafo = document.querySelector('.quadrado-jogo-velha#quadrado-' + i + ' p');
        if(paragrafo)
        quad.removeChild(paragrafo);
        quad.disabled = false;
        quadrados[i] = null;
        document.getElementById('quadrado-'+i).style.background = 'white';

        var divVencedor = document.getElementById('vencedor');
        var texto = document.querySelector('#vencedor span');
        if(texto)
        divVencedor.removeChild(texto);
    }
}