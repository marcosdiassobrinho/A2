$(document).ready(function(){
    $('#first-name').mask('000.000.000-00', {reverse: true});  
  });

$(document).ready(logar());
  
function logar(){
    var usuario = document.querySelector('#first-name');
    var senha = document.querySelector('#senha');
    if (usuario.value == "123.123.123-12" && senha.value == "123") {
        window.location.href = "landing.html";        
    } else{
        alert("Usuário ou senha errada!");
    }    
};