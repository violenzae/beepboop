$(document).ready(function(){
  $("form#piglatin").submit(function(event){
    event.preventDefault();
  var input = $("sentence").val();
  // input.toLowerCase();

  //var reverseInput = input.split("").reverse().join("");
  // reverseInput.toLowerCase();


  var lowerCase = sentence.toLowerCase();
  var vowels = ["a", "e", "i", "o", "u"];
  var qu = "qu"
  var words= lowerCase.split(" ");
  var results = ""

  
  if (lowerCase.toLowerCase() === reverseInput.toLowerCase()){
    alert("This is a palindrome");
  }
  else{
    alert("This is not a palindrome");
  }
  
  });
});