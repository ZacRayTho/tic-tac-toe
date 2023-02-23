//Model
//the brain,holds the data
class gameData {
    //every class has to have a constructor() method?? (according to w3schools)
    //constructor method automatically called when new object is created
    //constructor is used to initialize object properties
    constructor() {
        //board state
        this.board = [0, 0, 0, 0, 0, 0, 0, 0, 0]
        //evens turns will be Xs ,odds will be Os
        this.turnNum = 0
        this.winBoard = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]
    }


}

//View
//what the user interacts with and sees 
class gameView {
    constructor() {
        //grab only div available
        this.app = document.getElementById("app");

    }
    init() {
        this.app.innerHTML = "";
        app.model.board.fill(0)
        //create row that I plan to append 9 col-4 to for tiles
        this.elementMake("div", "row", "", "", "", this.app, "")
        this.row = document.getElementsByClassName("row");
        for (let i = 0; i < 9; i++) {
            this.elementMake("div", "col-4 border text-center d-flex align-items-center", "background-color: grey; min-height: 200px;", i, `app.clickMe(${i})`, this.row[0], "")
        }
    }

    //when passing in event don't include parentheses
    elementMake(elly, className, style, id, event, parent, content) {
        // this.par = document.querySelector(parent)
        this.ellie = document.createElement(elly);
        this.ellie.className = className;
        this.ellie.style = style;
        this.ellie.id = id;
        this.ellie.setAttribute("onclick", event);
        this.ellie.innerHTML = content;
        parent.append(this.ellie);
    }
}

//Controller/ the brains???
//between model and view passing info back and forth
//possible just the event on tile click? 9 gameControllers?

class gameController {
    constructor(model, view) {
        this.model = model
        this.view = view
    }

    clickMe(index) {
        //evens Xs [0,2,4,6,8] / odds Os [1,3,5,7]
        let tiles = document.getElementsByClassName("col-4")
        if (this.model.turnNum % 2 == 0 && this.model.board[index] == 0) {
            tiles[index].innerHTML = "☠";
            this.model.board[index] = 1;
            this.model.turnNum++
        } else if (this.model.turnNum % 2 == 1 && this.model.board[index] == 0) {
            tiles[index].innerHTML = "☮";
            this.model.board[index] = -1;
            this.model.turnNum++

        }
        if (this.model.turnNum > 4){
            this.checkWin()
        }
    }

    checkWin() {
        for (let i = 0; i < this.model.winBoard.length; i++){
            let sum = 0;
            for (let j = 0; j < this.model.winBoard[i].length; j++) {
                sum += this.model.board[this.model.winBoard[i][j]]
                if (sum == 3) {
                    this.winner("☠")
                    return;
                }
                else if (sum == -3) {
                    this.winner("☮")
                    return
                }
            }
        }
        if (this.model.board.every(e => e != 0)) {
            console.log("TIE")
            this.winner("😼")
        }
    }

    winner(marker) {
        this.model.board.fill(2)
        this.model.turnNum = 0;
        this.view.elementMake("div", "text-center fs-1", "", "", "", this.view.app, `${marker} Wins!` )
        this.view.elementMake("button", "", "", "", "app.view.init()", this.view.app, "Reset Game?" )
        // let win = document.createElement("div");
        // win.className = "text-center fs-1"
        // win.innerHTML = marker + " wins! <br>"
        // app.append(win)
        // let restart = document.createElement("button");
        // restart.innerHTML = "Reset Game?"
        // restart.addEventListener("click", ()=> {
        //     app.innerHTML = ""
        //     who()
        // })
        // win.appendChild(restart)
    }
    restart() {
        this.view.app.innerHTML = "";
        
    }

}
//()=>{this.view.app.innerHTML = ''}
// console.log("hello")
const app = new gameController(new gameData(), new gameView())
app.view.init()
