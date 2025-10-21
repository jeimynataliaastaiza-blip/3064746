function fnGeo(){
    let datovariable="";
    datovariable=document.getElementById("txtdato").value;
    console.log(" ingrsaste el dato;",datovariable);
}  
function fnCalcularider(){
    let numero1 = 0;
    let numero2 = 0;
numero1=document.querySelector('#txtnum1').value;
numero2=document.querySelector('.txtnum2').value;

let resultadosuma= parseInt(numero1) + parseInt(numero2);
console.log("la suma de las datos :",
numero1, "+", numero2, "es:", resultadosuma);

console.log(`la suma de las datos : 
${numero1} + ${numero2} es: ${resultadosuma}`);
}
function fnCalcularesta(){
     let numero1 = 0;
    let numero2 = 0;
numero1=document.querySelector('#txtnum1').value;
numero2=document.querySelector('.txtnum2').value;


let resultadoresta= parseInt(numero1) - parseInt(numero2);
console.log("la resta de las datos :",
numero1, "-", numero2, "es:", resultadoresta);

console.log(`la resta de las datos : 
${numero1} - ${numero2} es: ${resultadoresta}`);
}


function fnCalculamulti(){
     let numero1 = 0;
    let numero2 = 0;
numero1=document.querySelector('#txtnum1').value;
numero2=document.querySelector('.txtnum2').value;


let resultadomulti= parseInt(numero1) * parseInt(numero2);
console.log("la multi de las datos :",
numero1, "*", numero2, "es:", resultadomulti);

console.log(`la  resultadomulti de las datos : 
${numero1} * ${numero2} es: ${resultadomulti}`);
}

function fnCalculadivicion(){
     let numero1 = 0;
    let numero2 = 0;
numero1=document.querySelector('#txtnum1').value;
numero2=document.querySelector('.txtnum2').value;


let resultadodivicion= parseInt(numero1) / parseInt(numero2);
console.log("la divicion de las datos :",
numero1, "/", numero2, "es:", resultadodivicion);

console.log(`la divicion de las datos : 
${numero1} / ${numero2} es: ${resultadodivicion}`);
}