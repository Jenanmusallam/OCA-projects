

/* local/session storage */

  function local(){
     var inputUSer= document.getElementById("userName");
     localStorage.setItem("userName", inputUSer.value);

     var inputPhone= document.getElementById("phoneNum");
     localStorage.setItem("phoneNum", inputPhone.value);

     var inputEmail= document.getElementById("userEmail");
     localStorage.setItem("userEmail", inputEmail.value);

     var inputDate= document.getElementById("userDate");
     localStorage.setItem("userDate", inputDate.value);

     var inputPass= document.getElementById("userPassword");
     localStorage.setItem("userPassword", inputPass.value);
    }



    function session(){
      var inputUSer= document.getElementById("userName");
      sessionStorage.setItem("userName", inputUSer.value);
 
      var inputPhone= document.getElementById("phoneNum");
      sessionStorage.setItem("phoneNum", inputPhone.value);

      var inputDate= document.getElementById("userDate");
      sessionStorage.setItem("userDate", inputDate.value);
 
      var inputEmail= document.getElementById("userEmail");
      sessionStorage.setItem("userEmail", inputEmail.value);
 
      var inputPass= document.getElementById("userPassword");
      sessionStorage.setItem("userPassword", inputPass.value);
     }

     function clear() {
      document.getElementById("form").reset();
    }


 /*  checkbox enable/disable */


  var checker = document.getElementById('check');
 var sendbtn = document.getElementById('btn1');
 
 checker.onchange = function(){
if(this.checked){
    sendbtn.disabled = false;
} else {
    sendbtn.disabled = true;
}

}

var checker2 = document.getElementById('check2');
 var sendbtn2 = document.getElementById('btn2');
 
 checker2.onchange = function(){
if(this.checked){
    sendbtn2.disabled = false;
} else {
    sendbtn2.disabled = true;
}

}

/* form validation */

function validateName(){
var name = document.getElementById("userName").value;
 
if(name.length == 0){
producePrompt("Name is Required", "errorName", "red");
return false;
}
if(!name.match(/^[A-Za-z]*\s[A-Za-z]*$/))
{
  producePrompt("First And Last Name Please", "errorName", "red");
return false;
}

producePrompt("Welcome "+ name, "errorName", "green");
return true;
}

function producePrompt(message, promptlocatin, color ){
  document.getElementById(promptlocatin).innerHTML = message;
  document.getElementById(promptlocatin).style.color = color;
}



function validatePhone(){
  var phone = document.getElementById("phoneNum").value;
   
  if(phone.length == 0){
  producePrompt("Number is Required", "errorPhone", "red");
  return false;
  }
  
  if(phone.length != 10){
    
    producePrompt("10 Digits Only", "errorPhone", "red");
    return false;
      }

  if(!phone.match(/^[0-9]{10}$/)){
  
  producePrompt("Digits Only", "errorPhone", "red");
  return false;
}

producePrompt("Vaild Number", "errorPhone", "green");
return true;
  }

  function producePrompt(message, promptlocatin, color ){
    document.getElementById(promptlocatin).innerHTML = message;
    document.getElementById(promptlocatin).style.color = color;
  }


function validateEmail(){

  var email = document.getElementById("userEmail").value;

  if(email.length == 0){

producePrompt("Email is Required","errorEmail", "red");
return false;
  }

if(!email.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z](2,4)$/)){
 
  producePrompt("Email is Invalied" ,"errorEmail", "red");
  return false;
}

  producePrompt("Valid Email","errorEmail" , "green" );
return true;

}
  

function validateDate(){

  var date = document.getElementById("userDate").value;

  if(date.length == 0){
producePrompt("Date is Required","errorDate", "red");
return false;
  }

  if(!date.match(/^(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d$/)){
producePrompt("Date is Invalied" ,"errorDate", "red");
  return false;
  }
  
producePrompt("Vaild Date", "errorDate","green");
return true;
}
  

function validatePassword(){

  var password = document.getElementById("userPassword").value;

  if(password.length == 0){

producePrompt("Password is Required","errorPassword", "red");
return false;
  }

  ''
  producePrompt("-Vaild Password", "errorPassword","green");
return true;
}