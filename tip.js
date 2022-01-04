
const bill     = document.getElementById("bill");
const tip= document.getElementById("tip");
const tamount= document.getElementById("tip-amount");
const total= document.getElementById("total");
const calculate = document.querySelector('.calc');



calculate.addEventListener('click', function(){

    let input = Number(bill.value);
let bribe = Number(tip.value);

    let value1 = input*bribe;
    tamount.value = value1;
    console.log(value1);
    let value2 = input + value1;
    total.value = value2;
});