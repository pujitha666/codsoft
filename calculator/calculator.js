//  calculator javascript program
 const display = document.getElementById("inputbox");

 function appendToDisplay(input){
    inputbox.value += input;

 }

 
  function clearDisplay(){
  inputbox.value = "";
  }

  function calculate(){
    try{
        inputbox.value =eval(inputbox.value);
    }
    catch{
        inputbox.value = "error";
    }

  }
 