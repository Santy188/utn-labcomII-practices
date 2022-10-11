function ask_name(){
    let person = prompt("ingrese su nombre", "nombre");

    if (person != null) {
        document.getElementById("saludo").innerHTML =
            "Hola " + person + "! Como estas?";
    }
}

function confirm_result(){
    let show;
    let result=confirm("desea confirmar?");
    if(result){
        show = "Aceptaste";
    }
    else{
        show = "No aceptaste";
    }
    document.getElementById("show_text").innerHTML = show;
}
