function addToList(playerName, playerNo) {
    const node = document.createElement("p"); // Create an "p" node:
    const textnode = document.createTextNode(playerNo+'. '+playerName); // Create a text node:
    node.appendChild(textnode); // Append the text node to the "li" node:
    document.getElementById("selectV").appendChild(node); // Append the "p" node to the list:
}

function disabledAndBackgroundColorById(playerId){
    const element = document.getElementById(playerId);
    element.disabled = true;
    element.style.backgroundColor= "rgb(162,169,175)";
}

function addPlayer(playerId,playerName){
    player.push(playerName);
    if (player.length > 5 ) {
        alert('You can not select more than 5')
        return;
    }

    disabledAndBackgroundColorById(playerId);
    addToList(playerName, player.length);
}




const player = [];
// Player 1
document.getElementById('playerSlect-1').addEventListener('click',function () {
    const playerName  = document.getElementById('playerName-1').innerText;
    addPlayer('playerSlect-1',playerName)
    // disabledAndBackgroundColorById('playerSlect-1');
    // player.push(playerName);
    // addToList(playerName, player.length);
});

// Player 2
document.getElementById('playerSlect-2').addEventListener('click',function () {
    const playerName  = document.getElementById('playerName-2').innerText;
    addPlayer('playerSlect-2',playerName)
});

// Player 3
document.getElementById('playerSlect-3').addEventListener('click',function () {
    const playerName  = document.getElementById('playerName-3').innerText;
    addPlayer('playerSlect-3',playerName)
});

// Player 4
document.getElementById('playerSlect-4').addEventListener('click',function () {
    const playerName  = document.getElementById('playerName-4').innerText;
    addPlayer('playerSlect-4',playerName)
});

// Player 5
document.getElementById('playerSlect-5').addEventListener('click',function () {
    const playerName  = document.getElementById('playerName-5').innerText;
    addPlayer('playerSlect-5',playerName)
});

// Player 6
document.getElementById('playerSlect-6').addEventListener('click',function () {
    const playerName  = document.getElementById('playerName-6').innerText;
    addPlayer('playerSlect-6',playerName)
});



// Calculate
let playerExpense;
document.getElementById('calculate').addEventListener('click',function () {
    if (player.length==0) {
        alert('Please select at least one player');
        return
    }
    const perPlayerCost  = document.getElementById('perPlayerCost').value;
    if (!perPlayerCost) {
        alert('Please provide a valid number');
    }
    const totalPlayer    = player.length;
    playerExpense        = perPlayerCost * totalPlayer;

    document.getElementById('playerExpense').innerText = Math.abs(playerExpense);
});


// Calculate Total
document.getElementById('calculateTotal').addEventListener('click',function () {
    if (player.length==0) {
        alert('Please select at least one player');
    }
    

    const managerCost  = document.getElementById('managerCost').value;
    const coachCost    = document.getElementById('coachCost').value;
    if (!managerCost || !coachCost) {
        alert('Please provide a valid number');
        return
    }
    totalAmount        = Math.abs(parseFloat(playerExpense)) + Math.abs(parseFloat(managerCost))  + Math.abs(parseFloat(coachCost));

    document.getElementById('totalAmount').innerText = totalAmount;
});

