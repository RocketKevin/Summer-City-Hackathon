$(document).ready(function() {
  setInterval(function())
    var keyLeft = false;
    var keyRight = false;
    var x = 500;
    var y = 0;
    
    $(document).keydown(function(event) {
        if (event.which == 37) {
            keyLeft = true;
        }
        else if (event.which == 39) {
            keyRight = true;
        }
        else if((event.which != 37) && (event.which != 39))
        {
            alert("try left or right keys!");
            keyLeft = false;
          keyRight = false;
        }
        
    function setLeftX(x)
    {
    x = x - 10;
    }
    function setRightX(x)
    {
        x = x + 10;
    }
    if(keyLeft === true)
    {
        setLeftX(x);
        alert("hi");
     $("#cone").css("left", x + "px");
    }
    if(keyRight === true)
    {
        setRightX(x);
     $("#cone").css("left", x + "px");
    }
});
}); //the end of document.ready