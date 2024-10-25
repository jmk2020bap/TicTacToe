import "./tictactoe.css";
let player1 = initialPlayerSetting('player1');
let player2 = initialPlayerSetting('player2');
console.log(player1);
console.log(player2);

const cells = document.getElementsByClassName('cell'); // table's each cell
let currentPlayer = setInitialCurrentPlayer();
let initialFlag = true;
let undoOccurred = false;
let cellFilledCount = 0;
let cases = [];
cases.push("012", "345", "678",
    "036", "147", "258",
    "048", "246"
);

for (let index = 0; index < cells.length; index++) {
    cells[index].addEventListener("click", () => {
        if (cells[index].innerHTML.length == 0) {
            if (!undoOccurred && !initialFlag) {
                switchCurrentPlayer();
            } else {
                undoOccurred = false;
            }

            cells[index].innerHTML = currentPlayer["type"];
            cells[index].style.color = currentPlayer["color"];

            currentPlayer["markCount"]++;
            currentPlayer["markArr"][index] = true; // marking을 tracking해서 winner판별하기 위한 구문

            cellFilledCount++;
            initialFlag = false;

        } else {
            if (currentPlayer["undoCount"] <= 0) {
                displayAlert("Hey " + currentPlayer["name"] + ", there are no more available undos.", false, false, true);
            } else {
                if (currentPlayer["lastMarkedPosition"] == index) {

                    undoOccurred = true;
                    currentPlayer["undoCount"]--;
                    cells[index].innerHTML = "";
                    document.querySelector('.' + currentPlayer["name"] + '> .undoCount').textContent = "무르기 횟수: " + currentPlayer["undoCount"];

                    currentPlayer["markCount"]--;
                    currentPlayer["markArr"][index] = false;

                    cellFilledCount--;

                    return;
                }
            }
        }

        currentPlayer["lastMarkedPosition"] = index;

        if (cellFilledCount == 9) {
            displayAlert("It's a tie.", false, true, false);
        }

        if (currentPlayer["markCount"] >= 3) {
            if (winnerCheck(currentPlayer["markArr"])) {
                displayAlert(currentPlayer["name"] + ", is the winner.", true, false, false);
                return;
            }
        }
    });
}
document.querySelector("#resetBtn").addEventListener("click", () => {
    reset()
});
document.querySelector("#previousPage").addEventListener("click", () => {
    window.history.back()
});


//fuctions below --------------------------------------------------------------
function displayAlert(stmt, winnerOccurs, tieOccurs, undoExpires) {
    if (undoExpires) {
        alert(stmt);
    } else {
        setTimeout(() => {
            alert(stmt);
            reset();
        }, 100);
    }
}
function reset() {
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerHTML = "";
    }
    player1 = initialPlayerSetting('player1');
    player2 = initialPlayerSetting('player2');
    currentPlayer = setInitialCurrentPlayer();
    cellFilledCount = 0;

}
function winnerCheck(playerMarkArr) {
    let tempArr;
    let isWinner;
    for (let i = 0; i < cases.length; i++) {
        isWinner = true;
        tempArr = cases[i];
        for (let j = 0; j < tempArr.length; j++) {
            if (!currentPlayer["markArr"][parseInt(tempArr.charAt(j))]) {
                isWinner = false;
            }
        }
        if (isWinner) {
            return true;
        }
    }
    return false;
}
function setInitialCurrentPlayer() {
    let currentPlayerIs;
    if (player1["playFirst"] === true) {
        currentPlayerIs = player1;
        document.querySelector('.player1').classList.add("currentIndicator");
    } else {
        currentPlayerIs = player2;
        document.querySelector('.player2').classList.add("currentIndicator");
    }
    return currentPlayerIs;

}
function switchCurrentPlayer() {
    currentPlayer = currentPlayer === player1 ? player2 : player1;
    document.querySelector('.player1').classList.toggle("currentIndicator");
    document.querySelector('.player2').classList.toggle("currentIndicator");
}
function initialPlayerSetting(playerIs) {
    let tempPlayer = JSON.parse(window.localStorage.getItem(playerIs));
    tempPlayer["name"] = playerIs;
    tempPlayer["undoCount"] = 3;
    tempPlayer["lastMarkedPosition"] = -1;
    tempPlayer["markArr"] = new Array(9).fill(false);
    tempPlayer["markCount"] = 0;
    document.querySelector("." + playerIs + "> .mark").textContent = tempPlayer["name"] + ": " + tempPlayer["type"];
    document.querySelector('.' + playerIs + '> .undoCount').textContent = "무르기 횟수: 3";
    document.querySelector('.' + playerIs + '> .mark').style.color = tempPlayer["color"];
    return tempPlayer;

}
