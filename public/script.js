const unitChange = document.querySelector('.change-unit');
const  tempNum = document.querySelector('.temp-num');
const feelsNum = document.querySelector('.feels-like-num');

let tempNumVal = tempNum.innerHTML;
let feelsNumVal = feelsNum.innerHTML;

unitChange.addEventListener('click', function(){
    if(unitChange.innerHTML == "Faranheit"){
        // change text of button 
        unitChange.innerHTML = "Celcius";
        // change stuff in real temp 
        tempNum.innerHTML = Math.round((tempNumVal * 9/5) + 32);
        document.querySelector('.temp-unit').innerHTML = "F";
        tempNumVal = tempNum.innerHTML;
        //change stuff in feels temp
        feelsNum.innerHTML = Math.round((feelsNumVal * 9/5) + 32);
        document.querySelector('.feels-like-unit').innerHTML = "F";
        feelsNumVal = feelsNum.innerHTML;

    }
    else if(unitChange.innerHTML == "Celcius"){
        // change text of button 
        unitChange.innerHTML = "Faranheit";
        // change stuff in real temp 
        tempNum.innerHTML = Math.round((tempNumVal - 32)* 5/9);
        document.querySelector('.temp-unit').innerHTML = "C";
        tempNumVal = tempNum.innerHTML;
        //change stuff in feels temp
        feelsNum.innerHTML = Math.round((feelsNumVal - 32) * 5/9);
        document.querySelector('.feels-like-unit').innerHTML = "C";
        feelsNumVal = feelsNum.innerHTML;
    }
})
