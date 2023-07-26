var myWin ;

function OpenWin()
{
    myWin = window.open("about.html", "" ,"width = 200 , height = 200");
}


function moveWin()
{

    var timer = setInterval( function(){
        setTimeout(MoveTo,0);
        setTimeout(MoveBy ,1 )
    },2);
}


function MoveTo()
{
    myWin = window.open("about.html", "" ,"width = 200 , height = 200")
    var y = 1
    for (var x = 1 ; x<=630 ; x++)
    {
        myWin.moveTo(x,y);
        y++;
    }
    myWin.close()
}

function MoveBy()
{
    myWin = window.open("about.html", "" ,"width = 200 , height = 200")
    var e = 630
    for (var m = 630 ; m>=0 ; m--)
    {
        myWin.moveTo(m,e);
        e--;
    }
    myWin.close()
}