var email = document.getElementById("InputEmail");
var pwd = document.getElementById("InputPassword1");
var error= document.getElementById("error");
var error1= document.getElementById("error1");
var regexp = /^([\w]+)@([a-z]{4,5}).([a-z]{2,3})$/;

function pValidate()
{
         upp=/[A-Z]/;
         num=/[0-9]/;
         low=/[a-z]/;
         sp=/[!@#$%\^&*\+]/
         let pflag=1,erflag=1;
         if((pwd.value.length)>=8)
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
                error1.innerHTML = "One special requied!!";
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
         if(pflag==1&&erflag==1){
            return true;
         }
         else{
            return false;
         }
}
function eValidate()
{
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

function validate()
{
   
   if(pValidate()&&eValidate())
      {
         return true;
      }
   else 
      {
         return false;
      }
   
}