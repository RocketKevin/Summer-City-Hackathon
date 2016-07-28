$(document).ready(function() {
  var t = 100;
 // $("#gummies").+css({top:'300px'})
  /*  setInterval(function() {
        $("#gummies").css({top:t"px"})
        t += 5;
        console.log(t)
    }, 1000);
*/
    var keyLeft = false;
    var keyRight = false;
    var x = 500;
    var y = 0;

    $(document).keydown(function(event) {
        if (event.which == 37) {
            keyLeft = true;
     //       setLeftX(x);
            $("#cone").css("left", "300px");

        }
        else if (event.which == 39) {
            keyRight = true;
       //     setRightX(x);
            $("#cone").css("left", "700px");
        }
        else if(event.which == 40)
        {
        $("#cone").css("left", "500px")
        }
        else if ((event.which != 37) && (event.which != 39) && (event.which != 40)) {
            alert("try left, right, or down keys!");
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