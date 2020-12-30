var valor = 0;
var turn = 0;
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
     var vl1 = document.createTextNode('1');
     vl1Element.appendChild(vl1)
     jogoElement.appendChild(vl1Element)

     var vl2Element = document.createElement('button');
     var vl2 = document.createTextNode('2');
     vl2Element.appendChild(vl2)
     jogoElement.appendChild(vl2Element)

     var vl3Element = document.createElement('button');
     var vl3 = document.createTextNode('3');
     vl3Element.appendChild(vl3)
     jogoElement.appendChild(vl3Element)

     var val1Element = document.createElement('button');
     var val1 = document.createTextNode('1');
     val1Element.appendChild(val1)
     jogoElement.appendChild(val1Element)

     var val2Element = document.createElement('button');
     var val2 = document.createTextNode('2');
     val2Element.appendChild(val2)
     jogoElement.appendChild(val2Element)

     var val3Element = document.createElement('button');
     var val3 = document.createTextNode('3');
     val3Element.appendChild(val3)
     jogoElement.appendChild(val3Element)
     
    //turno de jogo 
    //jogador 1
        vl1Element.onclick= function(){
            if(turn!=0){
                return false;
            }
            else{
            valor+=1;
            turn++;  
            result();
            if(valor==21){
                alert('jogador 1 venceu');
                valor=0; 
                result(); 
                cd++;
                pv++;
            } 
        }
    }
        vl2Element.onclick= function(){
            if(turn!=0){
                return false;
            }
            else{
                valor+=2;
            turn++;
            result();
            if(valor>=21){
                alert('jogador 1 venceu');
                valor=0;
                result();
                cd++;
                pv++;
            }
        }
    }
        vl3Element.onclick = function (){
            if(turn!=0){
                return false;
            }
           else{
            valor+=3;
            turn++;
            result();
           if(valor>=21){
               alert('jogador 1 venceu');
               valor=0;
               turn=0;
               result();
               cd++;
                pv++;
            } 
        } 
    }
    //jogador 2
        val1Element.onclick= function(){
            if(turn!=1){
                return false;
            }
            else{
                valor+=1;
                turn--;
                result();
            if(valor==21){
                alert('jogador 2 venceu');
                valor=0;
                turn=0;
                result();
                pd++;
                cv++;
            }   
        } 
    }
        val2Element.onclick= function(){
            if(turn!=1){
                return false;
            }
            else{
                valor+=2;
                turn--;
                result();
            if(valor>=21){
                alert('jogador 2 venceu');
                valor=0;
                turn=0;
                result();
                pd++;
                cv++;
            }
        }
    }
        val3Element.onclick = function (){
            if(turn!=1){
                return false;
            }
           else{
               valor+=3;
               turn--;
               result();
           if(valor>=21){
               alert('jogador 2 venceu');
               valor=0;
               turn=0;
               result();
               pd++;
               cv++;
           }
        }
       }
       var resultElement = document.querySelector(".resultado");
       var resultadoElement = document.createElement('p');
       resultElement.appendChild(resultadoElement);
       result = function(){
           resultadoElement.innerHTML = valor;
       }
       result();
    
     //endereçamento
     computerElement.onclick = function(){
        location.href = "1jogador.html"; 
     }
    
     playerElement.onclick = function(){
         location.href = "2jogadores.html";
     }

     rankingElement.onclick = function(){
        alert('Jogador 1: ' + pv +' Vitoria(s) e '+ pd + ' Derrota(s)\n'
           +'Jogador 2: '+ cv + ' Vitoria(s) e ' + cd + ' Derrota(s)')
    }