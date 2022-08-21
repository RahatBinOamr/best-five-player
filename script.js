const cart = [];


function displayPlayers(){
    const totalPlayers = document.getElementById('total-players');
    totalPlayers.innerText = cart.length;

    const selectedPlayer = document.getElementById('collection-players');
    selectedPlayer.textContent = '';


    for(let i=0; i<cart.length; i++ ){
        const tr = document.createElement("tr");
        tr.innerHTML = `
        <th>${i+1}</th>
        <td>${cart[i].playerName}</td>
        `
        selectedPlayer.appendChild(tr);
    }

}
function player(element){
    const playerName = element.parentNode.parentNode.children[0].innerText;
  

   const players = {
    playerName:playerName,
   }
   cart.push(players);
   displayPlayers();
}
