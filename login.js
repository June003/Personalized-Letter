function verifyPassword(){
    var pw = document.getElementById("enter_pswd").value;
var filter1 = /[a-z]/g;
var filter2 = /[A-Z]/g;
var filter3 = /[0-9]/g;
var filter4 = /[@$,<>#:?_*&;]/g;
if(pw.length < 8 || pw.length > 15){
    document.getElementById("must").innerHTML =
    "Password must be <br> between 8 to 15 characters";
    return false;
}
if(!filter1.test(pw)){
    document.getElementById("must").innerHTML =
    "Password must contain <br> atleast one lowercase letter";
    return false;
}

if(!filter2.test(pw)){
    document.getElementById("must").innerHTML =
    "Password must contain <br> atleast one uppercase letter";
    return false;
}

if(!filter3.test(pw)){
    document.getElementById("must").innerHTML =
    "Password must contain <br> atleast one number";
    return false;
}
if(!filter4.test(pw)){
    document.getElementById("must").innerHTML =
    "Password must contain <br> atleast one special character";
    return false;
}
}

