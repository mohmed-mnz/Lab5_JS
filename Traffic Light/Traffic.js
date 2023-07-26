function Start()
{
    var timer = setInterval( function(){
        setTimeout(red , 1000)
        setTimeout(yellow , 2000 )
        setTimeout(green , 3000 )
    },3100);
}


function red(){

    document.getElementById("red").innerText="Ready"
    document.getElementById("red").style.color = "red"
    document.getElementById("yellow").innerText=""
    document.getElementById("green").innerText=""
    document.getElementById("redLight").style.backgroundColor = "red"
    document.getElementById("yl").style.backgroundColor = "black"
    document.getElementById("gl").style.backgroundColor = "black"
}

function yellow(){

    document.getElementById("red").innerText=""
    document.getElementById("yellow").style.color = "yellow"
    document.getElementById("yellow").innerText="Steady"
    document.getElementById("green").innerText=""
    document.getElementById("redLight").style.backgroundColor = "black"
    document.getElementById("yl").style.backgroundColor = "yellow"
    document.getElementById("gl").style.backgroundColor = "black"
}

function green(){

    document.getElementById("red").innerText=""
    document.getElementById("green").style.color = "green"
    document.getElementById("yellow").innerText=""
    document.getElementById("green").innerText="Go"
    document.getElementById("redLight").style.backgroundColor = "black"
    document.getElementById("yl").style.backgroundColor = "black"
    document.getElementById("gl").style.backgroundColor = "green"
}



