$(document).ready(function(){
  $("form#beepboop").submit(function(event){
  event.preventDefault();    
  var input = parseInt($("#num").val());
  var array = [];


  console.log(input); //just checking :(
    console.log(array); //arrgh :::(())

  for(i=0; i <= input; i++){
    if(i.toString().includes("3")) {
      array.push("I'm sorry, Dave. I'm afraid I can't do that.")
    } else if (i.toString().includes("2")){
      array.push("Boop!")
    } else if (i.toString().includes("1")){
      array.push("Beep!")
    } else {
    array.push(i.toString())
    }
  }
  
  array.forEach(function(val){
    $("#output").append('<li>' + val + '</li>');
  });

  });
});