$(document).ready(function() {
    let xChoices = [];
    let oChoices = [];
    $('.table, td').single_double_click(function() {
    console.log($(this).attr('id'));
    let id = $(this).attr('id');
    $(this).attr('value', 'X');
    console.log($(this).attr('value'));
    document.getElementById(id).innerHTML = "X";
    xChoices.push(id);
    console.log(xChoices);
    if (xChoices.length >=3){
       calculateWin(xChoices, "X") 
    }      
}, function() {
    console.log($(this).attr('id'));
    let id = $(this).attr('id');
    $(this).attr('value', 'O');
    console.log($(this).attr('value'));
    document.getElementById(id).innerHTML = "O";
    oChoices.push(id);
    console.log(oChoices);
    if (oChoices.length >=3){
        calculateWin(oChoices, "O")
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
    match0 = 0;
    match1 = 0;
    match2 = 0;
    match3 = 0;
    match4 = 0;
    match5 = 0;
    for (let i=0; i<choiceArray.length; i++){
        //using ternary operators to check the choice arrays for matches using regex to count the matches in rows and columns
        (match0<3 && /^0/.test(choiceArray[i]))? match0+=1: match0;
        (match1<3 && /^1/.test(choiceArray[i]))? match1+=1: match1;
        (match2<3 && /^2/.test(choiceArray[i]))? match2+=1: match2;
        (match3<3 && /0$/.test(choiceArray[i]))? match3+=1: match3;
        (match4<3 && /1$/.test(choiceArray[i]))? match4+=1: match4;
        (match5<3 && /2$/.test(choiceArray[i]))? match5+=1: match5;
        //checking for 3 matches to declare a winner
        if (match0===3 || match1===3 || match2===3 || match3===3 || match4===3 || match5===3){
            document.getElementById("winner").innerHTML= "Player "+winner+" Wins";
        }
    }
    console.log(match0,match1,match2,match3,match4,match5)
} 

ticTacToeGrid();

