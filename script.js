$(document).ready(function() {
    $("#button1").click(function() {
        $("#gummies").animate({
            top: "310px",
        }, 2500, function() {
            $("#gummies").css({
                top: '123px'
            })
            if ($("#coneimage").position().left === 330)
                window.location = "icecream1.html"
            
        });
    })

    $("#button2").click(function() {
        $("#sprinkles").animate({
            top: "310px",
        }, 2500, function() {
            $("#sprinkles").css({
                top: '157px'
            })
            if ($("#coneimage").position().left === 530 )
                window.location = "icecream2.html"
        });
    })

    $("#button3").click(function() {
        $("#chocolate").animate({
            top: "310px",
        }, 2500, function() {
            $("#chocolate").css({
                top: '123px'
            })
            if ($("#coneimage").position().left === 730)
                window.location = "icecream3.html"
        });
    })

    $("#button4").click(function() {
        $("#mm").animate({
            top: "310px",
        }, 2500, function() {
            $("#mm").css({
                top: '123px'
            })
            if ($("#coneimage").position().left === 925)
                window.location = "icecream4.html"
        });
    })


//**Everything below this line is the code for Key Movement (Connected to the Cone)
    var keyLeft = false;
    var keyRight = false;
    var x = 500;
    var y = 0;
    var countL = 0; //NEW!EDIT: All values were changed. LL = 330px L = 530px M = 630px R = 730px RR = 925px
    var countR = 0; //EDit: I'm changing the values of the LL, L, M, R, AND RR!! 100-> 330 |330 -> 450|645->635|925->720|1000->925
    $(document).keydown(function(event) {
        if ((event.which == 37) && (countL == 0) && (countR == 0)) { //<0,0> -> <1,0>
            keyLeft = true;
            //       setLeftX(x);
            $("#cone").css("left", "530px"); //330 = L
            countL++;
        }
        else if ((event.which == 37) && (countL == 1)) //keyCode (which) 37 = left, 39 = right, 40 = down
        {
            keyLeft = true; //100 = LL
            $("#cone").css("left", "330px"); //<<1,0> -> <2,0>
            countL = 2;
            countR = 0;
        }
        else if ((event.which == 39) && (countL == 2)) { //<2,0> -> <1,0>
            countL--; //this is 1 now
            $("#cone").css("left", "530px"); //330 = L
        }
        else if ((event.which == 39) && (countL == 1)) { //<1,0> -> <0,0>
            countL--; //this is 0 now
            $("#cone").css("left", "630px"); //645 = middle
        }
        else if ((event.which == 39) && (countR == 0) && (countL == 0)) { //<0,0> -> <0,1>
            keyRight = true;
            //     setRightX(x);
            $("#cone").css("left", "730px"); //925 = R
            countR++;
        }
        else if ((event.which == 39) && (countR == 1)) { //<0,1> -> <0,2>
            keyLeft = true;
            $("#cone").css("left", "925px"); //1000 = RR
            countR = 2;
            countL = 0;
        }
        else if ((event.which == 37) && (countR == 2)) { // <0,2> -> <0,1>
            countR--;
            $("#cone").css("left", "730px"); //925 = R
        }
        else if ((event.which == 37) && (countR == 1)) { // <0,1> -> <0,0>
            countR--;
            $("#cone").css("left", "630px"); //645 = middle
        }
        /*else if(event.which == 40) //for setting the middle position
        {
        $("#cone").css("left", "645px")
        }*/
        else if ((event.which != 37) && (event.which != 39) && (event.which != 40)) {
            alert("Try using the left, right, or down keys!");
            keyLeft = false;
            keyRight = false;
        }
    })
 ////$("#cone").attr("src","Vanilla-Cone-Gummy-Bears.png");

    /*   if (keyLeft === true) { //This section of code is unused.
           setLeftX(x);
           alert("hi");
           $("#cone").css("left", x + "px");
       }
       if (keyRight === true) {
           setRightX(x);
           $("#cone").css("left", x + "px");
       }

       function setLeftX(x) {
           x = x - 10;
       }

       function setRightX(x) {
           x = x + 10;
       }*/

}); //the end of document.ready