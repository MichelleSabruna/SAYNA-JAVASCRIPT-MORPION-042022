function initializing() {
    //on cache le bouton "Again"
    document.getElementById("again").style.visibility = "hidden";
};
var grid = ['item1','item2','item3','item4','item5','item6','item7','item8','item9',];
var arr1 = [];
var arr2 = [];
var arr3 = [];
var arr4 = [];
var arr5 = [];
var arr6 = [];
var arr7 = [];
var arr8 = [];
var arr9 = [];
var success;
var gameOver = false;
var arr = [];
var clicked = 0;
var choise = 9;
var playerScore = 0;
var cpuScore = 0;
var player = {
    name : 'Player 1',
    team: '',
    arr : []
};
var cpu = {
    name : 'Computer',
    team : '',
    arr : []
};

$('.cpu-score').html(cpuScore);
$('.you-score').html(playerScore);
function findElement(check){
    arr1 = ['item1', 'item2', 'item3'];
    arr2 = ['item4', 'item5', 'item6'];
    arr3 = ['item7', 'item8', 'item9'];
    arr4 = ['item1', 'item4', 'item7'];
    arr5 = ['item2', 'item5', 'item8'];
    arr6 = ['item3', 'item6', 'item9'];
    arr7 = ['item1', 'item5', 'item9'];
    arr8 = ['item3', 'item5', 'item7'];

success;

switch(true) {
    case success = arr1.every(function(val) {
    return check.arr.IndexOf(val) !== -1;
}):
    gameOver = true;
    winning(arr1);
    setTimeout(on, 700, check.name);
    break;

    case success = arr2.every(function(val) {
        return check.arr.IndexOf(val) !== -1;
    }):
    gameOver = true;
    winning(arr2);
    setTimeout(on, 700, check.name);
    break;

    case success = arr3.every(function(val) {
        return check.arr.IndexOf(val) !== -1;
    }):
    gameOver = true;
    winning(arr3);
    setTimeout(on, 700, check.name);
    break;

    case success = arr4.every(function(val) {
        return check.arr.IndexOf(val) !== -1;
    }):
    gameOver = true;
    winning(arr4);
    setTimeout(on, 700, check.name);
    break;

    case success = arr5.every(function(val) {
        return check.arr.IndexOf(val) !== -1;
    }):
    gameOver = true;
    winning(arr5);
    setTimeout(on, 700, check.name);
    break;

    case success = arr6.every(function(val) {
        return check.arr.IndexOf(val) !== -1;
    }):
    gameOver = true;
    winning(arr6);
    setTimeout(on, 700, check.name);
    break;

    case success = arr7.every(function(val) {
        return check.arr.IndexOf(val) !== -1;
    }):
    gameOver = true;
    winning(arr7);
    setTimeout(on, 700, check.name);
    break;

    case success = arr8.every(function(val) {
        return check.arr.IndexOf(val) !== -1;
    }):
    gameOver = true;
    winning(arr8);
    setTimeout(on, 700, check.name);
    break;
}
}


// (function () {

//     // Récupération des cases à clicker
//     const items = document.getElementsByClassName('grid-item');
    


   

    

    
    
   
    function choiseCase(clicked_id) {
       if (cliked % 2 === 0){
         $('#'+ clicked_id).html ('<p class="animated bounceIn" style="font-size:2em;color:blue;">+player.team+</p>')
         grid.splice(grid.indexOf(clicked_id), 1);
        player.arr.push(clicked_id);
        findElement(player);
        finished();
        $('.player-turn').css({"border-bottom":"none"});
        $('.cpu-turn').css({"border-bottom":"3px solid orange"});
        $('#' + clicked_id).prop("disabled", true);
        setTimeout(computer, 1300);
       }

       choise -= 1,
       cliked ++;
    }

    function computer(){
        var ran = Math.floor(Math.random() * choise);
        var res = grid[ran];
            $("#" + res).html('<p class="animated bounceIn" style="font-size:2em;color:orange;">+cpu.team+</p>')
        cpu.arr.push(grid[ran]);
            grid.splice(grid.indexOf(res), 1);
            findElement(cpu);
        finished();
        $('#' + res).prop("disabled", true);
        $('.cpu-turn').css({"border-bottom":"none"});
        $('.player-turn').css({"border-bottom":"3px solid blue"});
        
        choise -= 1,
        cliked ++;
    }

    function winnershow(){
        $('.layer2').removeClass('animated');
        $('.layer2').fadeOut(400);
        $('.grid-item').empty();
        player.arr = [];
        cpu.arr = [];
        grid = ['item1','item2','item3','item4','item5','item6','item7','item8','item9',];
        choise = 9;
        gameOver = false;
    }

    function  matchnull(){
        $('.layer3').removeClass('animated');
        $('.layer2').fadeOut(400);
        $('.grid-item').empty();
        player.arr = [];
        cpu.arr = [];
        grid = ['item1','item2','item3','item4','item5','item6','item7','item8','item9',];
        choise = 9;
        gameOver = false;
    }
    
    
//     // Vide le contenu de toute les cases
//     function rest() {
//         for (var i = 0; i < items.length; i++) {
//             console.log(items[i]);
//             items[i].textContent = ''
//         }
//     }
// })();
    