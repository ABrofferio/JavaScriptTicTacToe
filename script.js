$(document).ready(function() {
    //arrays to hold the x and o coordinates to determine score
    let xChoices = [];
    let oChoices = [];
    //array to hold all ids to determine a cat's game
    let catsGame = [];
    //assigning x and o attributes as well as visible html text based on click and double clicks
    $('.table, td').single_double_click(function() {
    let id = $(this).attr('id');
    document.getElementById(id).innerHTML = "X";
    if (catsGame.indexOf(this.id)===-1){
        catsGame.push(id);
    }
    //check if the id already exists in the array and if not push
    if (xChoices.indexOf(this.id)===-1){
        xChoices.push(id);
    }
    if (xChoices.length >=3){
       calculateWin(xChoices, "X") 
    }
    if (catsGame.length ===9 && "#winner".innerHTML!=='' ){
        document.getElementById("winner").innerHTML= "Cat's Game";
    }
}, function() {
    let id = $(this).attr('id');
    document.getElementById(id).innerHTML = "O";
    if (catsGame.indexOf(this.id)===-1){
        catsGame.push(id);
    }
    //check if the id already exists in the array and if not push
    if (oChoices.indexOf(this.id)===-1){
        oChoices.push(id);
    }
    if (oChoices.length >=3){
        calculateWin(oChoices, "O")
    }
    if (catsGame.length ===9 && "#winner".innerHTML===''){
        document.getElementById("winner").innerHTML= "Cat's Game";
    }
})
});

function ticTacToeGrid() {
    const columns = 3, rows = 3;
    //why can i use a class but not the element name <table>
    const table = $('.table');

    for (let r = 0; r < rows; r++) {
        const row = $('<tr>');
        table.append(row)
        for (let c = 0; c < columns; c++) {
            const cell = $('<td>');
            cell.attr('id', r+","+c);
            row.append(cell);
        }
    }
}

function calculateWin(choiceArray, winner){
    let win = false;
    let match0 = 0;
    let match1 = 0;
    let match2 = 0;
    let match3 = 0;
    let match4 = 0;
    let match5 = 0;
    let match6 = 0;
    let match7 = 0;
    for (let i=0; i<choiceArray.length; i++){
        //using ternary operators to check the choice arrays for matches using regex to count the matches in rows and columns
        (match0<3 && /^0/.test(choiceArray[i]))? match0+=1: match0;
        (match1<3 && /^1/.test(choiceArray[i]))? match1+=1: match1;
        (match2<3 && /^2/.test(choiceArray[i]))? match2+=1: match2;
        (match3<3 && /0$/.test(choiceArray[i]))? match3+=1: match3;
        (match4<3 && /1$/.test(choiceArray[i]))? match4+=1: match4;
        (match5<3 && /2$/.test(choiceArray[i]))? match5+=1: match5;
        (choiceArray[i]==="0,0" || choiceArray[i]==="1,1" || choiceArray[i]==="2,2") ? match6 +=1:match6;
        (choiceArray[i]==="0,2" || choiceArray[i]==="1,1" || choiceArray[i]==="2,0") ? match7 +=1:match7;
        //checking for 3 matches to declare a winner
        if (match0===3 || match1===3 || match2===3 || match3===3 || match4===3 || match5===3 || match6===3 || match7===3){
            document.getElementById("winner").innerHTML= "Player "+winner+" Wins";
        }
    }
} 

ticTacToeGrid();
