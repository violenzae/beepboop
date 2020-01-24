$(document).ready(function(){
  $("form#beepboop").submit(function(event){
  event.preventDefault();    
  var input = parseInt($("#num").val());
  var output = [];

  console.log(input); //just checking :(

  for(i=0; i <= input; i++){
    if(i.toString().includes("3")) {
      output.push("I'm sorry Dave, I can't do that.")
    } else if (i.toString().includes("2")){
      output.push("Boop!")
    } else if (i.toString().includes("1")){
      output.push("Beep!")
    } else {
    output.push(i)
  }
  }

  $("#output").append(output);


  });
});