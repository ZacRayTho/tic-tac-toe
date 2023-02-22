//Model
class gameData {
    //every class has to have a constructor() method?? 
    //constructor method automatically called when new object is created
    //constructor is used to initialize object properties
    constructor() {
        //board state
        board = ["", "", "", "", "", "", "", "", ""]
        //evens turns will be Xs ,odds will be Os
        turnNum = 0
    }


}

//View
class gameView {
    constructor() {
        app = document.getElementById("app")
        this.elementMake("div", "row", "", "", )
    }

    //when passing in event don't include parentheses
    elementMake(element, className, style, id, event, parent, content) {
        let element = document.createElement(element);
        element.className = className;
        element.style = style;
        element.id = id;
        element.onclick = event;
        element.innerHTML = content;
        parent.appendChild(element);
    }
}

//Controller
class gameController {
    constructor () {

    }
    
}