var valor = 0;
var pv = 0;
var pd=0;
var cv =0;
var cd = 0;

 //Criar um texto para meu jogo
 var headElement = document.querySelector('.head');
 var titleElement = document.createElement('h1');
 var title = document.createTextNode('Bem vindo ao 21 de boca');
 headElement.appendChild(titleElement);
 titleElement.appendChild(title);
 var escolhaElement= document.createElement('h2');
 var escolha = document.createTextNode('Escolha seu adversario abaixo');
 headElement.appendChild(escolhaElement);
 escolhaElement.appendChild(escolha);

 //desenvolver o menu
 var menuElement = document.querySelector('.boca');

 //criar "butões"
 var computerElement = document.createElement('button');
 var playerElement = document.createElement('button');
 var rankingElement = document.createElement('button');

 //definindo "butões"
 var computer = document.createTextNode('Computador');
 computerElement.appendChild(computer);
 menuElement.appendChild(computerElement);

 var player = document.createTextNode('2 jogadores');
 playerElement.appendChild(player);
 menuElement.appendChild(playerElement);

 var ranking = document.createTextNode('Ranking');
 rankingElement.appendChild(ranking);
 menuElement.appendChild(rankingElement);

 //"butões" do jogo
var jogoElement = document.querySelector(".jogo");
     var vl1Element = document.createElement('button');
     var val1 = document.createTextNode('1');
     vl1Element.appendChild(val1)
     jogoElement.appendChild(vl1Element)

     var vl2Element = document.createElement('button');
     var val2 = document.createTextNode('2');
     vl2Element.appendChild(val2)
     jogoElement.appendChild(vl2Element)

     var vl3Element = document.createElement('button');
     var val3 = document.createTextNode('3');
     vl3Element.appendChild(val3)
     jogoElement.appendChild(vl3Element)
     
    //turno de jogo 
    playerturn = function(){
        
        vl1Element.onclick= function(){
            valor+=1;
            result();
            if(valor==21){
                alert('você venceu');
                valor=0;
                playerturn();
                result();
                cd++;
                pv++;
            }
            else{
                computerturn();
            }
            
        }
        vl2Element.onclick= function(){
            valor+=2;
            result();
            if(valor>=21){
                alert('você venceu');
                valor=0;
                playerturn();
                result();
                cd++;
                pv++;
            }
            else{
            computerturn();}
        }
        vl3Element.onclick = function (){
           valor+=3;
           result();
           if(valor>=21){
               alert('você venceu');
               valor=0;
               result();
               playerturn();
               cd++;
               pv++;
           }
          else{ computerturn();}
       }
    }
    computerturn = function(){
        var random = (min,max) => Math.floor(Math.random()*(max-min)+min);
        valor+= random(1,4);
        if(valor>=21){
            alert ('você perdeu para a maquina');
            valor =0;
            result();
            playerturn();
            pd++;
            cv++;
        }
        result();
    }

    //resultado na tela
    var resultElement = document.querySelector(".resultado");
       var resultadoElement = document.createElement('p');
       resultElement.appendChild(resultadoElement);
       result = function(){
           resultadoElement.innerHTML = valor;
       }
       result();
    
     playerturn();

     //endereçamento

     computerElement.onclick = function(){
        location.href = "1jogador.html";
       
     }
    
     playerElement.onclick = function(){
         location.href = "2jogadores.html";
     }
     rankingElement.onclick = function(){
         alert('Jogador : ' + pv +' Vitoria(s) e '+ pd + ' Derrota(s)\n'
            +'Computador: '+ cv + ' Vitoria(s) e ' + cd + ' Derrota(s)')
     }