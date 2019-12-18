

$("#home").click(function(){

    $("#todo-add").fadeOut("fast", function(){
      $("#todo-main").fadeIn();
    });
});
    
$("#add").click(function(){

    $("#todo-main").fadeOut("fast", function(){
    $("#todo-add").fadeIn();
    });
});
  