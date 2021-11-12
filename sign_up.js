var email = document.getElementById("InputEmail");
var number = document.getElementById("number");
var pwd = document.getElementById("InputPassword1");
var verpwd = document.getElementById("InputPassword2");
var error= document.getElementById("error");
var error1= document.getElementById("error1");
var error2= document.getElementById("error2");
var error3= document.getElementById("error3");

function eValidate()
{
         var regexp = /^([\w]+)@([a-z]{4,5}).([a-z]{2,3})$/;
         let flag=1;
         if(regexp.test(email.value)&&e.chatAt(email.value.length-4)=='.'&&email.value.chatAt(email.value.length-10)=='@')
         {
            flag=1;
         }
         else{
            error.innerHTML = "invalid";
            error.style.color = "red";
            email.style.border = "thick solid red";
            flag=0;
         }
         if(flag==1){
            return true;
         }
         else{
            return false;
         }
 }
function num()
{   
    var regexp1 = /^([0-9]{3,3}).([0-9]{3,3}).([0-9]{4,4})$/;
    var regexp2 = /^([0-9]{3,3})-([0-9]{3,3})-([0-9]{4,4})$/;
    var regexp3 = /^([0-9]{3,3})\s([0-9]{3,3})\s([0-9]{4,4})$/;
    let flag=1;
    if(regexp1.test(number.value)||regexp2.test(number.value)||regexp3.test(number.value))
    { 
      flag=1;
    }
    else{
      error2.innerHTML = "invalid format";
      error2.style.color = "red";
      number.style.border = "thick solid red";
      flag=0;
       
    }
    if(flag==1){
       return true;
    }
    else{
       return false;
    }
}

function pValidate()
{
         upp=/[A-Z]/;
         num=/[0-9]/;
         low=/[a-z]/;
         sp=/[!@#$%\^&*\+]/;
         let pflag=1,erflag=1,vf=1;
         if(pwd.value.length>8)
         {
            error1.innerHTML = "strong password";
            error1.style.color = "green";
            pwd.style.border = "thick solid green";
            pflag = 1; 
         }
         else if(pwd.value.length==8)
         {
            error1.innerHTML = "perfect password";
            error1.style.color = "orange";
            pwd.style.border = "thick solid orange";
            pflag = 1;
         }
         else
         {
            error1.innerHTML = "invalid";
            error1.style.color = "red";
            pwd.style.border = "thick solid red";
            pflag = 0;
         }
         if(pwd.value.length>=8)
         {
            if(!upp.test(pwd.value)){
                error1.innerHTML = "One Uppercase letter requied!!";
                error1.style.color = "red";
                pwd.style.border = "thick solid red";
                erflag=0;
            }
            
            if(!num.test(pwd.value)){
                error1.innerHTML = "One digit requied!!";
                error1.style.color = "red";
                pwd.style.border = "thick solid red";
                erflag=0;
            }
            if(!low.test(pwd.value)){
                error1.innerHTML = "One lowercase letter requied!!";
                error1.style.color = "red";
                pwd.style.border = "thick solid red";
                erflag=0;
            }
            if(!sp.test(pwd.value)){
                error1.innerHTML = "One special character requied!!";
                error1.style.color = "red";
                pwd.style.border = "thick solid red";
                erflag=0;
            }
            pflag=1;
         }
         else{
            error1.innerHTML = "invalid";
            error1.style.color = "red";
            pwd.style.border = "thick solid red";
            pflag = 0;
         }
         
         if(pwd.value==verpwd.value)
            {
               vf=1;
            }
         else{
               vf=0;
               error3.innerHTML = "mismatch!!";
               error3.style.color = "red";
               pwd.style.border = "thick solid red";
            }
    
         if(pflag==1&&erflag==1&&vf==1){
            return true;
         }
         else{
            return false;
         }
}
function validate()
{
    if(pValidate()&&num()&&eValidate())
        {
            return true;
        }
    else 
        {
            return false;
        }

}