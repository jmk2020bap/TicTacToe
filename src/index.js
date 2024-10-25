import "./style.css";
let linkToScreenChange = document.querySelector("#linkToScreenChange");

if (Math.round(Math.random()) == 0) {
    document.getElementById('player1').setAttribute('checked', true);
} else {
    document.getElementById('player2').setAttribute('checked', true);
}

linkToScreenChange.addEventListener("click", (e) => {

    let player1Type = document.querySelector('[name=type1]:checked').value;
    let player1Color = document.querySelector('[name=color1]:checked').value;
    let player2Type = document.querySelector('[name=type2]:checked').value;
    let player2Color = document.querySelector('[name=color2]:checked').value;
    let whoPlayFirst = document.querySelector('[name=playFirst]:checked').value;

    if (player1Type == player2Type && player1Color == player2Color) {
        e.preventDefault();

    }

    let player1 = {
        color: player1Color,
        type: player1Type
    };
    let player2 = {
        color: player2Color,
        type: player2Type
    };

    if (whoPlayFirst === "player1") {
        player1["playFirst"] = true;
        player2["playFirst"] = false;
    } else {
        player1["playFirst"] = false;
        player2["playFirst"] = true;
    }
    window.localStorage.setItem('player1', JSON.stringify(player1));
    window.localStorage.setItem('player2', JSON.stringify(player2));

});

