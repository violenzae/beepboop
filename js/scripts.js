$(document).ready(function(){
  $("form#beepboop").submit(function(event){
  event.preventDefault();    
  var input = parseInt($("#num").val());
  var output = [];


  $("#output").append(input);


  });
});