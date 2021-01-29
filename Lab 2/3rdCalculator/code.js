function addWrapper(){
   let aStr = document.getElementById("idNum1").value; 
   let a = parseInt(aStr);

   let bStr = document.getElementById("idNum2").value; 
   let b = parseInt(bStr);
   document.getElementById("idResult").value = add(a,b);
}

function subWrapper(){
   let aStr = document.getElementById("idNum1").value; 
   let a = parseInt(aStr);

   let bStr = document.getElementById("idNum2").value; 
   let b = parseInt(bStr);
   document.getElementById("idResult").value = sub(a,b);
}

function mulWrapper(){
   let aStr = document.getElementById("idNum1").value; 
   let a = parseInt(aStr);

   let bStr = document.getElementById("idNum2").value; 
   let b = parseInt(bStr);
   document.getElementById("idResult").value = mul(a,b);
}

function divWrapper(){
   let aStr = document.getElementById("idNum1").value; 
   let a = parseInt(aStr);

   let bStr = document.getElementById("idNum2").value; 
   let b = parseInt(bStr);
   document.getElementById("idResult").value = div(a,b);
}


function add(a,b){
    let c = 0;
    c = a + b;
    return c;
}

function sub(a,b){
    let c = 0;
    c = a - b;
    return c;
}

function mul(a,b){
    let c = 0;
    c = a * b;
    return c;
}

function div(a,b){
    let c = 0;
    c = a / b;
    return c;
}
