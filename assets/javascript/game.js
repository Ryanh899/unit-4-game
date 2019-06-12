var userNumber = 0; 


//pick random number between 1, 50
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomInt(1, 50))
//display random number 
function goalNumber() {
$('#randomNumber').html(`Goal: ${getRandomInt(1,50)}`)
}
//assign random number value to buttons
function buttonNumber () {
$('#button-1').val(getRandomInt(1, 10))
$('#button-2').val(getRandomInt(1, 10))
$('#button-3').val(getRandomInt(1, 10))
$('#button-4').val(getRandomInt(1, 10))
console.log($('#button-1').val(), $('#button-2').val(), $('#button-3').val(), $('#button-4').val())
}
buttonNumber()

//on click for buttons 
$('#button-1').on('click', function(){
    var int = parseInt($('#button-1').val())
    userNumber = userNumber + int; 
    console.log(userNumber)
})
$('#button-2').on('click', function(){
    var int = parseInt($('#button-2').val())
    userNumber = userNumber + int; 
    console.log(userNumber)
})
$('#button-3').on('click', function(){
    var int = parseInt($('#button-3').val())
    userNumber = userNumber + int; 
    console.log(userNumber)
})
$('#button-4').on('click', function(){
    var int = parseInt($('#button-4').val())
    userNumber = userNumber + int; 
    console.log(userNumber)
})
