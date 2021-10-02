const main = document.getElementById("main");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide")
const upper = document.getElementById("upper")
const numbers = document.querySelectorAll('.numbers');
const equals = document.getElementById('equals');
const cButton = document.getElementById("C");
const ceButton = document.getElementById("CE");
const pointBtn = document.getElementById("point");
const backspaceBtn = document.getElementById("backspace");
let result;
let priorUpper;
let priorMain;
let bkMem;

function bkspcFunction(){
    bkMem = main.innerHTML;
    if(upper.innerHTML.includes("=") === false){
    let bkMem = main.innerHTML;
    bkMem = bkMem.substring(0, bkMem.length - 1);
    main.innerHTML = bkMem;
    
    if(main.innerHTML.length < 1){
        main.innerHTML = "0";
    }
};  
    if(upper.innerHTML.includes("=") === true){
        result = bkMem;
        result = undefined;
        main.innerHTML = bkMem;
        upper.innerHTML = '';
    } 
};

// lots of event listeners
pointBtn.addEventListener('click', function bkspcFunction(){
    if(main.innerHTML.includes(".") !== true && upper.innerHTML.includes("=") === false ){
        main.innerHTML +='.';
    } if (upper.innerHTML.includes("=")=== true){
        result = undefined;
        upper.innerHTML = '';
        main.innerHTML = '0';
    } 
});

cButton.addEventListener('click', function(){
    upper.innerHTML=''; 
    main.innerHTML = 0
    result = undefined;
});

ceButton.addEventListener('click', function(){
    main.innerHTML = '0'
    result = undefined;
});

backspaceBtn.addEventListener('click', function(){ 
    let bkMem = main.innerHTML;
    if(upper.innerHTML.includes("=") === false){
    let bkMem = main.innerHTML;
    bkMem = bkMem.substring(0, bkMem.length - 1);
    main.innerHTML = bkMem;
    
    if(main.innerHTML.length < 1){
        main.innerHTML = "0";
    }
};  
    if(upper.innerHTML.includes("=") === true){
        result = bkMem;
        result = undefined;
        main.innerHTML = bkMem;
        upper.innerHTML = '';
    } 
});
    

plus.addEventListener('click', function(){
    if(upper.innerHTML !== '' || result !== undefined && main.innerHTML !== '0'){
        //upper.innerHTML = '';   
        if(upper.innerHTML.includes("=") === true){
            upper.innerHTML = '';
            upper.innerHTML = `${result} + `;
        }else if(upper.innerHTML === undefined){ 
            result = parseFloat(upper.innerHTML) + parseFloat(main.innerHTML);
            main.innerHTML = '0';       
            upper.innerHTML = `${result} + `;
        } else if(upper.innerHTML.includes("-") || upper.innerHTML.includes("x") || upper.innerHTML.includes("÷")){
            if(upper.innerHTML.includes("-")){
                result = parseFloat(upper.innerHTML) - parseFloat(main.innerHTML);
            } else if (upper.innerHTML.includes("x")){
                result = parseFloat(upper.innerHTML) * parseFloat(main.innerHTML);
            } else if (upper.innerHTML.includes("÷")){
                result = parseFloat(upper.innerHTML) / parseFloat(main.innerHTML);
            }
             upper.innerHTML = '';
             main.innerHTML = '0';
             upper.innerHTML = `${result} + ` 
        }
        else{
            result = parseFloat(upper.innerHTML) + parseFloat(main.innerHTML);
            main.innerHTML = '0';       
            upper.innerHTML = `${result} + `;
        }
    } else{
        upper.innerHTML = '';
        upper.innerHTML = `${main.innerHTML} + `;
        main.innerHTML = '0';
    }
});
    
    minus.addEventListener('click', function(){
        if(upper.innerHTML !== '' || result !== undefined && main.innerHTML !== '0'){
            //upper.innerHTML = '';   
            if(upper.innerHTML.includes("=") === true){
                upper.innerHTML = '';
                upper.innerHTML = `${result} - `;
            }else if(upper.innerHTML === undefined){ 
                result = parseFloat(upper.innerHTML) - parseFloat(main.innerHTML);
                main.innerHTML = '0';       
                upper.innerHTML = `${result} - `;
            } else if(upper.innerHTML.includes("+") || upper.innerHTML.includes("x") || upper.innerHTML.includes("÷")){
                if(upper.innerHTML.includes("+")){
                    result = parseFloat(upper.innerHTML) + parseFloat(main.innerHTML);
                } else if (upper.innerHTML.includes("x")){
                    result = parseFloat(upper.innerHTML) * parseFloat(main.innerHTML);
                } else if (upper.innerHTML.includes("÷")){
                    result = parseFloat(upper.innerHTML) / parseFloat(main.innerHTML);
                }
                 upper.innerHTML = '';
                 main.innerHTML = '0';
                 upper.innerHTML = `${result} - ` 
            }
            else{
                result = parseFloat(upper.innerHTML) - parseFloat(main.innerHTML);
                main.innerHTML = '0';       
                upper.innerHTML = `${result} - `;
            }
        } 
            
            else {
                upper.innerHTML = '';
                upper.innerHTML = `${main.innerHTML} - `;
                main.innerHTML = '0';
            }
        });

multiply.addEventListener('click', function(){
    if(upper.innerHTML !== '' || result !== undefined && main.innerHTML !== '0'){
        //upper.innerHTML = '';   
        if(upper.innerHTML.includes("=") === true){
            upper.innerHTML = '';
            upper.innerHTML = `${result} x `;
        }else if(upper.innerHTML === undefined){ 
            result = parseFloat(upper.innerHTML) * parseFloat(main.innerHTML);
            main.innerHTML = '0';       
            upper.innerHTML = `${result} x `;
        } else if(upper.innerHTML.includes("-") || upper.innerHTML.includes("+") || upper.innerHTML.includes("÷")){
            if(upper.innerHTML.includes("-")){
                result = parseFloat(upper.innerHTML) - parseFloat(main.innerHTML);
            } else if (upper.innerHTML.includes("+")){
                result = parseFloat(upper.innerHTML) + parseFloat(main.innerHTML);
            } else if (upper.innerHTML.includes("÷")){
                result = parseFloat(upper.innerHTML) / parseFloat(main.innerHTML);
            }
             upper.innerHTML = '';
             main.innerHTML = '0';
             upper.innerHTML = `${result} x ` 
        }
        else{
            result = parseFloat(upper.innerHTML) * parseFloat(main.innerHTML);
            main.innerHTML = '0';       
            upper.innerHTML = `${result} x `;
        }
    } 
        
        else {
            upper.innerHTML = '';
            upper.innerHTML = `${main.innerHTML} x `;
            main.innerHTML = '0';
        }
    });

divide.addEventListener('click', function(){
    if(upper.innerHTML !== '' || result !== undefined && main.innerHTML !== '0'){
        //upper.innerHTML = '';   
        if(upper.innerHTML.includes("=") === true){
            upper.innerHTML = '';
            upper.innerHTML = `${result} ÷ `;
        }else if(upper.innerHTML === undefined){ 
            result = parseFloat(upper.innerHTML) / parseFloat(main.innerHTML);
            main.innerHTML = '0';       
            upper.innerHTML = `${result} ÷ `;
        } else if(upper.innerHTML.includes("-") || upper.innerHTML.includes("x") || upper.innerHTML.includes("+")){
            if(upper.innerHTML.includes("-")){
                result = parseFloat(upper.innerHTML) - parseFloat(main.innerHTML);
            } else if (upper.innerHTML.includes("x")){
                result = parseFloat(upper.innerHTML) * parseFloat(main.innerHTML);
            } else if (upper.innerHTML.includes("+")){
                result = parseFloat(upper.innerHTML) + parseFloat(main.innerHTML);
            }
             upper.innerHTML = '';
             main.innerHTML = '0';
             upper.innerHTML = `${result} ÷ ` 
        }
        else{
            result = parseFloat(upper.innerHTML) / parseFloat(main.innerHTML);
            main.innerHTML = '0';       
            upper.innerHTML = `${result} ÷ `;
        }
    } 
        
        else {
            upper.innerHTML = '';
            upper.innerHTML = `${main.innerHTML} ÷ `;
            main.innerHTML = '0';
        }
    });


equals.addEventListener('click', function equalsFunction(){
    
    if(upper.innerHTML.includes("+") && upper.innerHTML.includes("=") === false){
        result = parseFloat(upper.innerHTML) + parseFloat(main.innerHTML);
        upper.innerHTML = ` ${upper.innerHTML}  ${main.innerHTML} = ` ; 
        if(result % 1 === 0){
        main.innerHTML = parseFloat(result);
        } else {
            main.innerHTML = parseFloat(result).toFixed(2);
        }
    } else if (upper.innerHTML.includes("-") && upper.innerHTML.includes("=") === false){
        result =  parseFloat(upper.innerHTML) - parseFloat(main.innerHTML);
        upper.innerHTML = ` ${upper.innerHTML} ${main.innerHTML} = ` ;
        if(result % 1 === 0){
        main.innerHTML = parseFloat(result);
        } else {
            main.innerHTML = parseFloat(result).toFixed(2);
        }
    } else if (upper.innerHTML.includes("x") && upper.innerHTML.includes("=") === false){
        result = parseFloat(upper.innerHTML) * parseFloat(main.innerHTML);
        upper.innerHTML = ` ${upper.innerHTML} ${main.innerHTML} = ` ;
        if(result % 1 === 0){
        main.innerHTML = parseFloat(result);
        } else {
            main.innerHTML = parseFloat(result).toFixed(2);
        }
    } else if (upper.innerHTML.includes("÷") && upper.innerHTML.includes("=") === false){
        result = parseFloat(upper.innerHTML) / parseFloat(main.innerHTML);
        upper.innerHTML = ` ${upper.innerHTML} ${main.innerHTML} = ` ;
        if(result % 1 === 0){
        main.innerHTML = parseFloat(result);
        } else {
            main.innerHTML = parseFloat(result).toFixed(2);
        }
    }
    
});


numbers.forEach(el => el.addEventListener('click', event => {
    if(main.innerHTML.length < 15) {
        if(main.innerHTML === '0' || main.innerHTML == result){
            main.innerHTML = '';
    } 
    if(upper.innerHTML.includes("=")=== true && main.innerHTML !== result){
        result = undefined;
        upper.innerHTML = '';
    }
    main.innerHTML += event.target.innerHTML;
}
}));

window.addEventListener('keydown', function(event) {
    if(main.innerHTML.length < 15) {
    if(event.keyCode == 49 || event.keyCode == 97) {
        if(main.innerHTML === "0"){
            main.innerHTML = '';
            main.innerHTML += '1';
        } else {
        main.innerHTML += '1';
        }
    } else if(event.keyCode == 50 || event.keyCode == 98 ) {
        if(main.innerHTML === "0"){
            main.innerHTML = '';
            main.innerHTML += '2';
        } else {
        main.innerHTML += '2';
        }
    } else if(event.keyCode == 51 || event.keyCode == 99) {
            if(main.innerHTML === "0"){
                main.innerHTML = '';
                main.innerHTML += '3';
            } else {
            main.innerHTML += '3';
            }
        } else if(event.keyCode == 52 || event.keyCode == 100) {
            if(main.innerHTML === "0"){
                main.innerHTML = '';
                main.innerHTML += '4';
            } else {
            main.innerHTML += '4';
            }
        } else if(event.keyCode == 53 || event.keyCode == 101) {
            if(main.innerHTML === "0"){
                main.innerHTML = '';
                main.innerHTML += '5';
            } else {
            main.innerHTML += '5';
            }
        } else if(event.keyCode == 54 || event.keyCode == 102) {
            if(main.innerHTML === "0"){
                main.innerHTML = '';
                main.innerHTML += '6';
            } else {
            main.innerHTML += '6';
            }
        } else if(event.keyCode == 55 || event.keyCode == 103) {
            if(main.innerHTML === "0"){
                main.innerHTML = '';
                main.innerHTML += '7';
            } else {
            main.innerHTML += '7';
            }
        } else if(event.keyCode == 56 || event.keyCode == 104) {
            if(main.innerHTML === "0"){
                main.innerHTML = '';
                main.innerHTML += '8';
            } else {
            main.innerHTML += '8';
            } 
        } else if(event.keyCode == 57 || event.keyCode == 105) {
            if(main.innerHTML === "0"){
                main.innerHTML = '';
                main.innerHTML += '9';
            } else {
            main.innerHTML += '9';
            }
        } else if(event.keyCode == 48 || event.keyCode == 96 && main.innerHTML !== "0") {
            if(main.innerHTML === "0"){
                main.innerHTML = '';
                main.innerHTML += '0';
            } else {
            main.innerHTML += '0';
            }
        } else if(event.keyCode == 8) {
            bkspcFunction();
}}});


