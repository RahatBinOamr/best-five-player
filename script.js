const cart = [];


function player(element){
    const playerName = element.parentNode.parentNode.children[0].innerText;
  

   const players = {
    playerName:playerName,
   }
   cart.push(players);
   console.log(players);
}

function displayPlayers(){
    const totalPlayers = document.getElementById('total-players');
    totalPlayers.innerText = cart.length;

    const selectedPlayer = document.getElementById('collection-players');
}