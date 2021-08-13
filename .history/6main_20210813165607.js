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
    var carSpecial = /[$&!?]/;
    var err = "";
    if(!eletMdp.value.match(carDecimal)){
        err+="<li>doit contenit un chiffre !</li>";
    }

    if(!eletMdp.value.match(carSpecial)){
        err+="<li>doit contenit un caractère spécial !</li>";
    }

    if(!eletMdp.valu.length < 6){
        err+="<li> est trop court : il faut au minimum 6 caractères ! </li>";
    }
    
    if(!eletMdp.valu.length > 8){
        err+="<li>est trop long : il faut au maximum 8 caractères !</li>";
    }

    if(err !==""){
        eletAffichage.textContent="Le mot de passe :  <u>" + err + "</u>";
        eletAffichage.style.border="2px solid red";
    }else
    eletAffichage.textContent="Le mot de passe :  <u>" + err + "</u>";
    eletAffichage.style.border="2px solid red";
})