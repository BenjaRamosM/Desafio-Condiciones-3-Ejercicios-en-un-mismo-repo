
let cant1 = document.querySelector('#input1');
let cant2 = document.querySelector('#input2');
let cant3 = document.querySelector('#input3');
let cant4 = 0;
let boton = document.querySelector(".boton");
const texto = document.querySelector("#resultado")

const boxElement = document.querySelector(".contenedor4");

boton.addEventListener("click",()=>{
    
    console.log(cant1.value)

    cant4 = Number(cant1.value) + Number(cant2.value) + Number(cant3.value);

    console.log(cant4);

    if(cant4>10)
    {
        texto.innerHTML="Demasiados stickers, solo podemos enviarte 10 :(";
    }
    else{
        texto.innerHTML="Llevas " + cant4 + " stickers :)";
    }

})
