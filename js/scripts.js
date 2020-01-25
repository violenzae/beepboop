$(document).ready(function(){
  $("form#beepboop").submit(function(event){
    event.preventDefault();    
    var input = parseInt($("#num").val());
    var name = $("#name").val();
    var array = [];
    var updown = parseInt($("input:radio[name=updown]:checked").val());
    

    function goUp(input) {
      for(i=0; i <= input; i++){
        if(i % 3 === 0 && i !== 0){
          array.push("I'm sorry, " +name+ ". I'm afraid I can't do that.")
        } else if(i.toString().includes("3")) {
          array.push("I'm sorry, Dave. I'm afraid I can't do that.")
        } else if (i.toString().includes("2")){
          array.push("Boop!")
        } else if (i.toString().includes("1")){
          array.push("Beep!")
        } else if (i % 2 === 0 && name.toLowerCase().includes("homer") ===    true) {
          array.push("d'oh.")
        } else {
        array.push(i.toString())
        }
      }
    }

    function goDown(input) {
      for(i=input; i >= 0; i--){
        if(i % 3 === 0 && i !== 0){
          array.push("I'm sorry, " +name+ ". I'm afraid I can't do that.")
        } else if(i.toString().includes("3")) {
          array.push("I'm sorry, Dave. I'm afraid I can't do that.")
        } else if (i.toString().includes("2")){
          array.push("Boop!")
        } else if (i.toString().includes("1")){
          array.push("Beep!")
        } else if (i % 2 === 0 && name.toLowerCase().includes("homer") ===    true) {
          array.push("d'oh.")
        } else {
          array.push(i.toString())
        }
      }
    }

    $("#output").empty();
    $("#gear").hide();


    if (updown == 0) {
      goUp(input);
    } else if (updown == 1) {
      goDown(input);
    } 


    if (name.toLowerCase().includes("homer") === true){
    $("#robot").hide();
    $("#homer").show();
    }

    array.forEach(function(item){
    $("#output").append('<li>' + item + '</li>');
    })
  });
});