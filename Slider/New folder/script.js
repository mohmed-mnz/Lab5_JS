var img = document.getElementById("image")

//next btn
var next_btn = document.getElementById("next_btn")
var  nextCounter = 1
next_btn.onclick = function(){
    var i = setInterval(function(){
        document.images[0].src = "SlideShow/"+nextCounter+".jpg"
        nextCounter++;
        if(nextCounter>6){
            clearInterval(i)
            nextCounter = 1
        }
    } , 2000)
}

//previous
var previous_btn = document.getElementById("previous_btn")
var previousCounter = 6
previous_btn.onclick = function(){
    var i = setInterval(function(){
        document.images[0].src =  "SlideShow/"+previousCounter+".jpg"
        previousCounter--;
        if(previousCounter<1)
        {
            clearInterval(i)
            previousCounter = 6
        }
    } , 2000)
}

//slidshow
var slideShow_btn = document.getElementById("slideShow_btn")
var slideShowCounter = 1
var slideShowInterval;
slideShow_btn.onclick = function(){
    slideShowInterval = setInterval(function(){
        document.images[0].src = "SlideShow/"+slideShowCounter+".jpg"
        slideShowCounter++;
        if(slideShowCounter == 6)
            slideShowCounter =1
    } , 1000)
}

//stop 
var stop_btn = document.getElementById("stop_btn")
stop_btn.onclick = function(){
    clearInterval(slideShowInterval)
}