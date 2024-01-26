let digito_1 = document.querySelector("#selec1");
let digito_2 = document.querySelector("#selec2");
let digito_3 = document.querySelector("#selec3");

let boton = document.querySelector(".boton");
const texto = document.querySelector("#resultado");

boton.addEventListener("click",()=>{

    console.log(digito_1.value);

    if(digito_1.value=="9" && digito_2.value=="1" && digito_3.value =="1"){
        texto.innerHTML = "Clave 1 correcta";
    }
    else if(digito_1.value=="7" && digito_2.value=="1" && digito_3.value =="4")
    {
        texto.innerHTML = "Clave 2 correcta";
    }
    else{
        texto.innerHTML = "Clave incorrecta";
    }

})



