$(document).ready(function() {
    $("#button1").click(function(){
      $("#gummies").animate({
        top: "310px",
      }, 3000, function(){
           $("#gummies").css({top:'123px'})
      });  
    })

    $("#button2").click(function(){
      $("#sprinkles").animate({
        top: "310px",
      }, 3000, function(){
           $("#sprinkles").css({top:'123px'})
      });  
    })

    $("#button3").click(function(){
      $("#chocolate").animate({
        top: "310px",
      }, 3000, function(){
           $("#chocolate").css({top:'123px'})
      });  
    })

    $("#button4").click(function(){
      $("#mm").animate({
        top: "310px",
      }, 3000, function(){
           $("#mm").css({top:'123px'})
      });  
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