startIntrvl()
var counter =0
var intrvl;
function startIntrvl(){
    intrvl = setInterval(function(){
    if(counter> document.images.length-1){
        document.images.item(document.images.length-1).src = "marbels/marble1.jpg"    
        counter = 0
    }
    document.images.item(counter).src = "marbels/marble3.jpg"
    counter++
    
    document.images.item(counter-2).src = "marbels/marble1.jpg"
    
} , 500)
}

var marbels_div = document.getElementById("marbels")
marbels_div.onmouseover = function(){
    clearInterval(intrvl)
}
marbels_div.onmouseout = function(){
    startIntrvl()
}
