function revealMessage(){
    document.getElementById("hiddenMessage").style.display="block";
}
function revealMessage2(){
    document.getElementById("hiddenMessage2").style.display="block";
}
function revealMessage3(){
    document.getElementById("hiddenMessage3").style.display="block";
}

function countDown(){
    var currenVal = document.getElementById("countDownButton").innerHTML;
    var newVal = 0;
    if(currenVal > 0){
        newVal = currenVal - 1;
    }
    document.getElementById("countDownButton").innerHTML = newVal;
}