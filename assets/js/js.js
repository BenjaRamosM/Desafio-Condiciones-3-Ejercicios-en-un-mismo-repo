let boton = document.querySelector(".fotoB");
let cnt=0;
const boxElement = document.querySelector(".contenedor");

    boton.addEventListener("click",()=>{
    cnt = cnt + 1;

    if(cnt>1){
        cnt=0;
    }
    console.log(cnt);

    if(cnt == 0){
        boxElement.classList.remove('borde');
    }
    else if(cnt == 1){
        boxElement.classList.add('borde');
    }
  
    });
