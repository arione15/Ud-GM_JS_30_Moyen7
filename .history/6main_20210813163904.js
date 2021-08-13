//var readline = require("readline-sync");


var eletLogin = document.querySelector("#login");
var eletMdp = document.querySelector("#password");
var eletAffichage = document.querySelector("#resultatPassword");

eletLogin.addEventListener("keyup", function(){
    var regex = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/;
    if(!regex.test(eletLogin.value)){
        eletLogin.style.backgroundColor="red";
    }else{
        eletLogin.style.backgroundColor="green";
    }
});

eletMdp.addEventListener("blur", function(){
    var carDecimal = /\d/;
    var carSpeciaDecimal = /\d/;
    var carDecimal = /\d/;
    if(eletMdp.matches())
})