$("#maininfo1").on('inview', function (event, isInView) {
    if (isInView) {
        $("#maininfo1").css({opacity:  "1"});
        }
   });

 $("#maininfo2").on('inview', function (event, isInView) {
    if (isInView) {
        $("#maininfo2").css({opacity:  "1"});
        }
   });

 $("#maininfo3").on('inview', function (event, isInView) {
    if (isInView) {
        $("#maininfo3").css({opacity:  "1"});
        }
   });


/**function setheight(){ 
var theWindow = $(window).height(); 
$('#header').height(theWindow); 
} 

$(window).load(function() { 
setheight(); 
}); 

$(window).resize(function(){ 
setheight(); 
});**/

