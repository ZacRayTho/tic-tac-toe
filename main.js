//Only div I can append to
const app = document.getElementById("app");

//state object to hold value and change the board
let state = {
    playerTurn: "x",
    board: [0, 0, 0, 0, 0, 0, 0, 0, 0], 
}

//let players decide what marker they want to be then calls init() when one is chose
function who() {
    state.board.fill(0)
    let q = document.createElement("div");
    q.className = "text-center"
    let header = document.createElement("h1");
    header.innerHTML = "Choose your marker";
    q.appendChild(header);
    let img1 = document.createElement("img");
    let img2 = document.createElement("img");
    img1.src = "./img/x.png";
    img1.addEventListener ("click", ()=> {
        init("x");
        return;
    })
    img2.src = "./img/o.png";
    img2.style = "height: 128px"
    img2.addEventListener ("click", ()=> {
        init("o");
        return;
    })
    q.appendChild(img1);
    q.appendChild(img2);
    app.append(q);

}

//makes the board and gives tiles the eventListeners that change the state.board and tiles innerHTML
function init(marker) {
    app.innerHTML = "";
    state.playerTurn = marker;
    let header = document.createElement("h1");
    header.innerText = "Tic-Tac-Toe";
    header.className = "col-12 text-center";
    app.append(header);
    let row = document.createElement("div");
    row.className = "row h-50  mx-auto "
    app.append(row);
    for (let i = 0; i < 9; i++) {
        let tile = document.createElement("div");
        tile.className = "col-4 border text-center d-flex align-items-center";
        tile.style = "background-color: grey; min-height: 200px;"
        tile.id = i;
        tile.addEventListener("click", ()=> {
            if (state.playerTurn == "x" && state.board[tile.id] == 0) {
                let img =  document.createElement("img");
                img.src = "./img/x.png";
                img.style.height = "80%"
                img.style.width = "100%"
                tile.appendChild(img);
                state.board[tile.id] = 1;
                state.playerTurn = "o"
                checkWin()
            }
            else if (state.playerTurn == "o" && state.board[tile.id] == 0) {
                let img =  document.createElement("img");
                img.src = "./img/o.png";
                img.style.height = "80%"
                img.style.width = "100%"
                tile.appendChild(img);
                state.board[tile.id] = -1;
                state.playerTurn = "x"
                checkWin()
            }
            
        })
        row.append(tile)
    }
    
    
}


//function to check who wins 
function checkWin() {
    let winCons = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    for (let i = 0; i < winCons.length; i++){
        let sum = 0;
        for (let j = 0; j < winCons[i].length; j++) {
            sum += state.board[winCons[i][j]]
            if (sum == 3) {
                winner("X")
                return;
            }
            else if (sum == -3) {
                winner("O")
                return
            }
        }
    }
    // console.log(state.wins.some(a => a.toString() == state.board.toString()));
    // doesn't work because state.wins cant handle  not a straight victory which isn't possible

    //check all columns possibilities
    // for (let i = 0; i < 3; i++) {
    //     if (state.board[i] + state.board[i + 3] + state.board[i + 6] == 3) {
    //         console.log("X wins")
    //         winner("X")
    //         return;
    //     }
    //     if (state.board[i] + state.board[i + 3] + state.board[i + 6] == -3) {
    //         console.log("O wins")
    //         winner("O")
    //         return;
    //     }
    // }

    // //check all row possibilities 
    // for (let i = 0; i < 9; i += 3) {
    //     if (state.board[i] + state.board[i + 1] + state.board[i + 2] == 3) {
    //         console.log("X wins")
    //         winner("X")
    //         return;
    //     }
    //     if (state.board[i] + state.board[i + 1] + state.board[i + 2] == -3) {
    //         console.log("O wins")
    //         winner("O")
    //         return;
    //     }
    // }

    // //check diagonal possibilities
    // if (state.board[0] + state.board[4] + state.board[8] == 3) {
    //     console.log("X wins")
    //     winner("X")
    //     return;
    // }
    // if (state.board[0] + state.board[4] + state.board[8] == -3) {
    //     console.log("O wins")
    //     winner("O")
    //     return;
    // }
    // if (state.board[2] + state.board[4] + state.board[6] == 3) {
    //     console.log("X wins")
    //     winner("X")
    //     return;
    // }
    // if (state.board[2] + state.board[4] + state.board[6] == -3) {
    //     console.log("O wins")
    //     winner("O")
    //     return;
    // }

    //check if board is full
    if (state.board.every(e => e != 0)) {
        console.log("TIE")
        winner("The cat")
    }
    

}

//if checkWin() finds 3 in row ,
function winner(marker) {
    state.board.fill(2)
    let win = document.createElement("div");
    win.className = "text-center fs-1"
    win.innerHTML = marker + " wins! <br>"
    app.append(win)
    let restart = document.createElement("button");
    restart.innerHTML = "Reset Game?"
    restart.addEventListener("click", ()=> {
        app.innerHTML = ""
        who()
    })
    win.appendChild(restart)
}
who()