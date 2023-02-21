## questions
- how to allow only one button click per tile
- how to check for 3 in a row (horizontal/vertical/diagonal)
- what will board state look like
- can reset board just call init again?

## html/css

### conditional rendering
 - whos turn?
 - who wins?
 
### atoms
 - header for "tic tac toe"
 - inividual tiles maybe??
 
### organisms
 - tiles - click events??
 - entire board
 - buttons /restart?

## variables

### state
 - playersTurn
 - turnNumber(?)
 - boardState = [0-9] array or 2d array??
 - winCons check through array for 3 in a row horizontal,vertical,diagonal
 - player1 symbol
 - player2 symbol
 - (instead or 2 player symbols just use playersTurn to keep track of whos active turn)
 - Winconditons = array of arrays that match wincons??
 - [1, 0, 0, 1, 0, 0, 1, 0, 0] would be left column win (1 wincon of 8 total(3 column wins,3 row wins , and two diagonal wins))
 - picture array like BELOW to help visualize 
 `[0, 0, 0,  
   0, 0, 0,  
   0, 0, 0]  

### functions
- init  
  - display header and blank board
  - let player choose x or o
  - start game with player first and their marker as active
- checkWin
  - check all array possibilites for 3 in a row (horizontal,vertical, diagonal)
  - if 3 in row found, end game display restart button
  - if state array is full then end game with tie [0, 0, 0, 0, 0, 0, 0, 0, 0] is new board, [1, 1, 1, 1, 1, 1, 1, 1, 1] is full baord  
- placeMarker(x or o)
  - turns clicked tile into marker depending on active player
  - checkWin
  - swaps activePlayer

## procedure
- INIT
  - init() creates board and gives player option of marker
  - sets state array to match number of of tiles (0-8)
  - set state activePLayer to whater player chose first
  - set turnNumber to 1
- START
- wait until tiled is clicked
- once tile is clicked call placemarker function
  - PlaceMarker() updates tile to not be clickable anymore and SHOULD display correctMarker
  - update array in state to match tile EX:IF first tile clicked[0, 0, 0,...] => [1, 0, 0,...]
  - swap activePLayer to otherMarker
  - turnNumber++
- after placeMarker() runs call checkWin()
  - checkWin() checks current state array against all wincon arrays
  - continue playing if no matches found
  - if match found display whoever placed last marker as winner
  - and show restart button
- keep playing until checkWin comes back true or until all tiles taken(make checkwin() check all tiles status to see if any tile can be clicked?)
- END

## objectives
 - The game should let the players know who's turn it is.
 - Game tiles should only be clickable once, and if the game is over they should not be clickable at all.
 - The game should display who wins the game if someone wins, otherwise, say that the game resulted in a tie.
 - There should be a Restart Game button that does not refresh the page (set state).
 - Use the symbols X and O.
 - On each player’s turn, that player places one of their symbols on an unoccupied space by clicking.
 - The game continues until one player places three symbols in a straight line (horizontal, vertical, or diagonal) and wins or there are no remaining available spaces and it is a draw.
 - Only have a single <div id="app"></div> in your index.HTML (try to code golf the HTML file)

## user journey
- start by choosing x or o
- always have whoever chose first go second
- wait till first marker is put down
- then player2/OtherMarker can go 
- repeat until EITHER no tiles remaining or til 3 in a row of X or O found
- display winning marker ex:"X wins!" 
- OR IF all tiles are clicked AND no 3 in a row found then display tie!
- display restart button

## MoSCoW

### MUST
- allow players to place marker
- check for win condition
- make tiles clickable
- not allow tiles to be click twice
### SHOULD
- let players know whos turn it is
- not hardcode allwin cons, prefer loop
### COULD
- stretch goals
- tiles darken or bounce on hover?
- scorebaord? might mess with restart being an init call
### WONT
- have ai
