$(document).ready(function() {
console.log("Hi");

// var element = "";

$("button").click(function(){
  $(".hiddenForm").show();
  // element = $(this);
});
$("#xButton").click(function(){
  $(".hiddenForm").hide();
});
$("#saveButton").click(function(){
  $(".hiddenForm").hide();
});

$("#saveButton").click(function(){
  $(this).removeClass("available");
});
$("#saveButton").click(function(){
  $(this).addClass("reserved");
});


// $("#saveButton").on("click", function(){
//   $(".hiddenForm").hide();
//   $(this).toggleClass("reserved");
// });








//end of jQuery thing that needs to be at the bottom
});
