var photos = ["1.jpg","2.jpg","3.jpg"]
var time = 3000;
var imgTag = document.querySelector("img")

var timer = setInterval(next,2000);

var count = 0;

function next(){
    count++;
    time=2000;
    if(count==3){
        count=0;
        imgTag.src = photos[count];
    }
    else{
        imgTag.src = photos[count];
    }
}

function prev(){
    count--;
    time=2000;
    if(count==-1){
        count=2;
        imgTag.src = photos[count];
    }
    else{
        imgTag.src = photos[count];
    }
    
}

function stop()
{
    clearInterval(timer)
}

function start()
{
    timer = setInterval(next,2000);
}