/**
 * criar um menu contendo as seguintes opções:
 * jogar contra o computador
 * jogar contra outro jogador
 * ranking do jogo
 * criar o jogo 21 de boca, regras:
 * quem chegar a 21 primeiro vence
 * 3 opções de números (1-3)
 */
//variáveis a serem usadas
const valorTotal = 21;
var valor = 0;
var min =1;
var max=3;
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

 //endereçamento aos jogos
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
