//function for time modification begins

function printTime(){
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    var show = document.getElementById('show');
    show.innerHTML = hour+':'+min+':'+sec;
}
setInterval(printTime, 1)
//function for time midification ends

//function for mathematical conversions begins
const STATUS = '°C';
var user = document.getElementById('input').value;
var result = document.getElementById('result');
var temp;

//conversions functions modification
function forFahr(){
    temp = eval((user-32)*5/9);
    return temp;
}

function forKelv(){
    temp = eval(user-273.15);
    return temp;
}
//conversions function modification ends

//function to display results on the screen
function showResult(){
    var choice = document.getElementById('choice').value;
    if(choice == 'Fahrenheit'){
        result.innerHTML = forFahr() + STATUS;
    }
    else if(choice == 'Kelvin'){
        result.innerHTML = forKelv() + STATUS;
    }
}

