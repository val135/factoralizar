'use strict';
const boton=document.querySelector(`.submit-button`);

boton.addEventListener(`click`,(e)=>{
    let numInput=document.querySelector(`.pick-number`);
    let save=numInput.value;
    event.preventDefault(e);
    numInput=parseFloat(numInput.value);
    if(numInput>=0 && numInput<=1){
        numInputb=1;
    }
    else if(numInput>1){
        for (var numInputb = 1; numInput > 0; numInput--) {
            numInputb *= numInput;
      }
    } 
    document.querySelector('p').innerHTML=`El factorial de ${save} es:`;
    document.querySelector('h1').innerHTML= `${numInputb}`;
})

/*function factorialize(numInput) {
    if(numInput>=0 && numInput<=1){
        numInputb=1;
    }
    else if(numInput>1){
        for (var numInputb = 1; numInput > 0; numInput--) {
            numInputb *= numInput;
      }
    } 
      return numInputb;
    }
     console.log(factorialize(-2));*/


     