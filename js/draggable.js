$( "#draggable" ).draggable();

$("#draggable").mouseenter(function(){
	    $("#imgdraggable").fadeOut("slow", function(){
		    $(this).remove();
		});
	});

$( "#infoDroppable" ).mouseenter(function() {
	$(".area").fadeOut('fast');
	$("#infoWindow").slideDown('slow')
        $(".helpers").fadeOut("slow");
        $("#name").fadeOut("slow");
 });


$( "#projectsDroppable" ).mouseenter(function() {
	$(".area").fadeOut('fast');
	$("#projectsWindow").slideDown('slow')
        $(".helpers").fadeOut("slow");
        $("#name").fadeOut("slow");
 });

$( "#contactDroppable" ).mouseenter(function() {
	$(".area").fadeOut('fast');
	$("#contactWindow").slideDown('slow')
        $(".helpers").fadeOut("slow");
        $("#name").fadeOut("slow");
 });

$(document).click(function(){
	$(".area").fadeOut('fast');
        $(".helpers").fadeToggle("slow");
        $("#name").fadeToggle("slow");
});
/**
$("#menu").click(function(){
	$(".area").fadeOut('fast');
        $(".helpers").fadeIn("slow");
        $("#name").fadeIn("slow");
});

$("body").click(function(){
	$(".area").fadeOut('fast');
        $(".helpers").fadeIn("slow");
        $("#name").fadeIn("slow");
});
**/
//$( "#projectsDroppable" ).droppable({
 // 	drop: function( event, ui ) {
  //      $(".helpers").fadeOut("slow");
  //		$("#projectsWindow").slideDown('slow')
   //     $("#name").fadeOut("slow");
  //	},
  //	out: function( event, ui ) {
   //     $("#projectsWindow").fadeOut('slow')
    //    $(".helpers").fadeIn("slow");
     //   $("#name").fadeIn("slow");
  //	}
//});


//$( "#contactDroppable" ).droppable({
 // 	drop: function( event, ui ) {
  //		$("#contactWindow").slideDown('slow')
   //     $(".helpers").fadeOut("slow");
    //    $("#name").fadeOut("slow");
  //	},
  //	out: function( event, ui ) {
   //     $("#contactWindow").fadeOut('slow')
    //    $(".helpers").fadeIn("slow");
     //   $("#name").fadeIn("slow");
  //	}
//});
	
