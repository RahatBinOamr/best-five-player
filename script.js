const cart = [];


function displayPlayers(){
    const totalPlayers = document.getElementById('total-players');
    totalPlayers.innerText = cart.length;

    const selectedPlayer = document.getElementById('collection-players');
    selectedPlayer.textContent = '';

    const set = cart.length;

    for(let i=0; i<set; i++ ){
        const tr = document.createElement("tr");
        tr.innerHTML = `
        <th>${i+1}</th>
        <td>${cart[i].playerName}</td>
        `

        if(set>5){

            alert("Player Sit Not Enough");
        }
       
        selectedPlayer.appendChild(tr);
    }
    

}



function player(element){
    element.disabled = true;
    const playerName = element.parentNode.parentNode.children[0].innerText;
    
    
    const players = {
        playerName:playerName,
    }
    
    
    cart.push(players);
    displayPlayers();
}





document.getElementById('calculation-btn').addEventListener('click',function(){
        const selectionPlayers =cart.length;
        
        const perPlayerValue = parseInt(document.getElementById('per-player-cost').value);
        const playerExpenses = perPlayerValue * selectionPlayers ;
        document.getElementById('player-expenses').value=playerExpenses;

    
    document.getElementById('calculate-total-btn').addEventListener('click',function(){
        const managerCost = parseInt(document.getElementById('Manager').value);
        const coachCost = parseInt(document.getElementById('coach').value);
        const totalCost = playerExpenses + managerCost + coachCost;

     document.getElementById('total-calculation').value = totalCost;

    })

    })
   

   