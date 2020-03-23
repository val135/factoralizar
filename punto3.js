'use strict';
const boton=document.querySelector(`.submit-button`);
boton.addEventListener(`click`,(e)=>{
    let numInput=document.querySelector(`.pick-number`);
    let save=numInput.value;
    var numInputb = 1;
    event.preventDefault(e);
    numInput=parseFloat(numInput.value);
    if(numInput%1===0){
        if(numInput>=0 && numInput<=1){
            numInputb=1;
        }
        else if(numInput>1){
            for (numInput > 0; numInput--;) {
                numInputb*= numInput;
          }
        }
        else{
            numInputb=`Error`;
        } 
    }
    else if(numInput%1===0.5 && numInput>0){   //condicion para numeros racionales positivos terminados en 0.5
        let i=Math.floor(numInput),numsave=numInput; //Math.floor() Retorna la parte entere del decimal
        for(i>0;i--;){  
            numsave--;   
            numInput*=numsave; 
            console.log(numsave);
        }
        numInputb=numInput*Math.sqrt(Math.PI);  // Math.sqrt retorna raiz cuadrada de un numero, Math.PI=valor de costante pi
    }      
    else{
        numInputb=`Error`;
    }
    document.querySelector('p').innerHTML=`El factorial de ${save} es:`;
    document.querySelector('h1').innerHTML= `${numInputb}`;
})



     
