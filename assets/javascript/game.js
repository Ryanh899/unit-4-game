var userNumber = 0; 

var thePick; 
var wins = 0; 
var losses = 0; 
//pick random number between 1, 50
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//display random number 
var goalNumber = function (func) {
thePick = func
$('#randomNumber').html(`Goal: ${func}`)
}
//assign random number value to buttons
function buttonNumber () {
$('#button-1').val(getRandomInt(1, 12))
$('#button-2').val(getRandomInt(1, 12))
$('#button-3').val(getRandomInt(1, 12))
$('#button-4').val(getRandomInt(1, 12))
console.log($('#button-1').val(), $('#button-2').val(), $('#button-3').val(), $('#button-4').val())
}
buttonNumber() 
goalNumber(getRandomInt(19, 120))
//on click for buttons 
$('#button-1').on('click', function(){
    var int = parseInt($('#button-1').val())
    userNumber = userNumber + int;
    $('#userNumber').html(`Your score: ${userNumber}`)
    win(userNumber, thePick)
})
$('#button-2').on('click', function(){
    var int = parseInt($('#button-2').val())
    userNumber = userNumber + int; 
    $('#userNumber').html(`Your score: ${userNumber}`)
    win(userNumber, thePick)
})
$('#button-3').on('click', function(){
    var int = parseInt($('#button-3').val())
    userNumber = userNumber + int; 
    $('#userNumber').html(`Your score: ${userNumber}`)
    win(userNumber, thePick)
})
$('#button-4').on('click', function(){
    var int = parseInt($('#button-4').val())
    userNumber = userNumber + int; 
    $('#userNumber').html(`Your score: ${userNumber}`)
    win(userNumber, thePick)
})

//gets userScore 
function win (num1, num2) {
    if (num1 === num2){
        wins++ ;  
        $('#wins').html(`Wins: ${wins}`)
        reset(win)
    } else if (num1 > num2) {
        losses++ ;
        $('#losses').html(`Losses: ${losses}`) 
        reset(win)
    }
}

//reset function
function reset (func) {
    if (func) {
        userNumber = 0; 
        buttonNumber() ;
        goalNumber(getRandomInt(19, 120)); 
    }
}
