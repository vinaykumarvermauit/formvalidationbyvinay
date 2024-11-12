// let username = document.getElementsByClassName('name-id');
let username = document.getElementById("name-id1");
let useremail = document.getElementById("name-id2");
let userpassword = document.getElementById("name-id3");

let flag = 1;
function Validform(){

    if(username.value.trim()==""){
        // username.style.border = "2px red solid";
        document.getElementById('valid1').innerHTML  = "Enter valid name !"
       flag =0;
    }
    else{
        // username.style.border = "none";
        document.getElementById('valid1').innerHTML  = "";
        flag =1;
       }

   if(useremail.value.trim()==""){
    //    useremail.style.border = "2px red solid";
         document.getElementById('valid2').innerHTML  = "Enter valid email !";
         flag = 0;
    }

    else{
        // useremail.style.border = "none";
        document.getElementById('valid2').innerHTML  = "";
        flag = 1;
     }


    if(userpassword.value.trim()==""){
        // userpassword.style.border = "2px red solid";
         document.getElementById('valid3').innerHTML  = "Strong password !";
         flag = 0;
    }
    else{
    // userpassword.style.border = "none";
    document.getElementById('valid3').innerHTML  = "";
    flag = 1;

    }
    if(flag){
        return true;
    }else{
        return false;
    }
  
}