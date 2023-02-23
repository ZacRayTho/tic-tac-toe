//Model
class GameData {
    //every class has to have a constructor() method?? (according to w3schools)
    //constructor method automatically called when new object is created
    //constructor is used to initialize object properties
    constructor() {
        //board state
        this.board = ["", "", "", "", "", "", "", "", ""]
        //evens turns will be Xs ,odds will be Os
        this.turnNum = 0
        this.gridArray = [];
    }


}

//View
class gameView {
    constructor() {
        //grab only div available
        this.app = document.getElementById("app");
        //create row that I plan to append 9 col-4 to for tiles
        this.elementMake("div", "row", "", "", "", this.app, "")
        this.row = document.getElementsByClassName("row");
        for (let i = 0; i < 9; i++) {
        this.elementMake("div", "col-4", "", i, gameController.clickMe, this.row[0], "")
        }
    }

    //when passing in event don't include parentheses
    elementMake(elly, className, style, id, event, parent, content) {
        // this.par = document.querySelector(parent)
        this.ellie = document.createElement(elly);
        this.ellie.className = className;
        this.ellie.style = style;
        this.ellie.id = id;
        this.ellie.onclick = event;
        this.ellie.innerHTML = content;
        parent.append(this.ellie);
    }
}

//Controller/ the brains???
//possible just the event on tile click? 9 gameControllers?

class gameController {
    // constructor (x) {
    //     //value will be x or o 
    //     this.value = ""
    //     //id will depend on tile location
    //     this.id = x
    // }

    clickMe(id) {

    }

}
console.log("hello")
let game = new GameData();
let gameCon = new gameController();
