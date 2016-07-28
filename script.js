$(document).ready(function() {
    $("#button1").click(function(){
          var t = 100;
 $("#gummies").css({top:'100px'})
  setInterval(function() {
        $("#gummies").css({top:t+"px"})
        t += 30;
        
        if (t === 310)
        t=100
    }, 1000);
    })

$("#button2").click(function(){
          var t = 100;
 $("#sprinkles").css({top:'100px'})
  setInterval(function() {
        $("#sprinkles").css({top:t+"px"})
        t += 30;
        
        if (t === 310)
        t=100
    }, 1000);
    })

$("#button3").click(function(){
          var t = 100;
 $("#chocolate").css({top:'100px'})
  setInterval(function() {
        $("#chocolate").css({top:t+"px"})
        t += 30;
        
        if (t === 310)
        t=100
    }, 1000);
    })

$("#button4").click(function(){
          var t = 100;
 $("#mm").css({top:'100px'})
  setInterval(function() {
        $("#mm").css({top:t+"px"})
        t += 30;
        
        if (t === 310)
        t=100
    }, 1000);
    })

    var keyLeft = false;
    var keyRight = false;
    var x = 500;
    var y = 0;

    $(document).keydown(function(event) {
        if (event.which == 37) {
            keyLeft = true;
     //       setLeftX(x);
            $("#cone").css("left", "330px");

        }
        else if (event.which == 39) {
            keyRight = true;
       //     setRightX(x);
            $("#cone").css("left", "925px");
        }
        else if(event.which == 40)
        {
        $("#cone").css("left", "645px")
        }
        else if ((event.which != 37) && (event.which != 39) && (event.which != 40)) {
            alert("Try using the left, right, or down keys!");
            keyLeft = false;
            keyRight = false;
        }
    })

 /*   if (keyLeft === true) {
        setLeftX(x);
        alert("hi");
        $("#cone").css("left", x + "px");
    }
    if (keyRight === true) {
        setRightX(x);
        $("#cone").css("left", x + "px");
    }
*/
    function setLeftX(x) {
        x = x - 10;
    }

    function setRightX(x) {
        x = x + 10;
    }

}); //the end of document.ready