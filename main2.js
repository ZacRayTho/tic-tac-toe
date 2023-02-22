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
    }
}

//Controller
class gameController {

}