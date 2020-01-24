$(document).ready(function(){
  $("form#beepboop").submit(function(event){
  event.preventDefault();    
  var input = parseInt($("#num").val());
  var array = [];
  var updown = parseInt($("input:radio[name=updown]:checked").val());


  console.log(input); //just checking :(
    console.log(array); //arrgh :::(())
  
  $("#output").empty();
  $("#gear").hide();

  if (updown == 0) {
    goUp(input);
  } else if (updown == 1) {
    goDown(input);
  }

  function goUp(input) {
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
}

function goDown(input) {
  for(i=input; i >= 0; i--){
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
}


  array.forEach(function(val){
    $("#output").append('<li>' + val + '</li>');
  });

  });
});