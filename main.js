const app = document.getElementById("app");
let state = {
    active: true,
    playerTurn: "x",
    board: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    wins: [[1, 0, 0, 1, 0, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 0, 0, 1, 0],
    [0, 0, 1, 0, 0, 1, 0, 0, 1],
    [1, 1, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 1, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 1],
    [0, 0, 1, 0, 1, 0, 1, 0, 0]]
}

function who() {
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

function init(marker) {
    app.innerHTML = "";
    state.playerTurn = marker;
    let header = document.createElement("h1");
    header.innerText = "Tic-Tac-Toe";
    header.className = "col-12 text-center";
    app.append(header);
    let row = document.createElement("div");
    row.className = "row h-50 w-50 mx-auto "
    app.append(row);
    for (let i = 0; i < 9; i++) {
        let tile = document.createElement("div");
        tile.className = "col-4 border text-center";
        tile.style = "background-color: grey; min-height: 130px;"
        tile.id = i;
        tile.addEventListener("click", ()=> {
            if (state.playerTurn == "x" && state.board[tile.id] == 0) {
                let img =  document.createElement("img");
                img.src = "./img/x.png";
                tile.appendChild(img);
                state.board[tile.id] = 1;
            }
            else if (state.playerTurn == "o" && state.board[tile.id] == 0) {
                let img =  document.createElement("img");
                img.src = "./img/o.png";
                img.style.height = "128px"
                tile.appendChild(img);
                state.board[tile.id] = 1;
            }
            
        })
        row.append(tile)
    }
}

function checkWin() {
    console.log(state.wins.some(a => a.toString() == state.board.toString()));
    //doesnt work because state.wins cant handle  not a straight victory which isnt possible
}
who()