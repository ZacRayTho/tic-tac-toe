//Model
class gameData {
    //every class has to have a constructor() method?? (according to w3schools)
    //constructor method automatically called when new object is created
    //constructor is used to initialize object properties
    constructor() {
        //board state
        this.board = [0, 0, 0, 0, 0, 0, 0, 0, 0]
        //evens turns will be Xs ,odds will be Os
        this.turnNum = 0

    }


}

//View
class gameView {
    constructor() {
        //grab only div available
        this.app = document.getElementById("app");

    }
    init() {
        //create row that I plan to append 9 col-4 to for tiles
        this.elementMake("div", "row", "", "", "", this.app, "")
        this.row = document.getElementsByClassName("row");
        for (let i = 0; i < 9; i++) {
            let tile = this.elementMake("div", "col-4 border text-center d-flex align-items-center", "background-color: grey; min-height: 200px;", i, `app.clickMe(${i})`, this.row[0], "")
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
            console.log("hellooooooo")
            tiles[index].innerHTML = "x";
            this.model.board[index] = 1;
            this.model.turnNum++
        } else if (this.model.turnNum % 2 == 1 && this.model.board[index] == 0) {
            console.log("hellooooooo")
            tiles[index].innerHTML = "o";
            this.model.board[index] = -1;
            this.model.turnNum++

        }
    }

}

// console.log("hello")
const app = new gameController(new gameData(), new gameView())
app.view.init()
