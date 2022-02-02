function desabilita(){
    var campos = document.getElementById("formItem").getElementsByTagName('*');

    for(var i = 0; i < campos.length; i++){

        //edita somente dos campos
        if(campos[i].tagName != 'LABEL'){
            
            campos[i].disabled = true;
            campos[i].style.cursor = 'not-allowed';
            campos[i].style.backgroundColor = 'rgb(197, 197, 197)';  
        }
    }

    alert("Sua mensagem foi enviada com sucesso");
}