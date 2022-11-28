const value = document.querySelector('#valuenum');
const nummarket = document.querySelector('#nummarket');
let numberproductincart = 3;
let price = 125.00;


function calmarket() {
    nummarket.innerHTML = numberproductincart;
    const cal =(price*numberproductincart).toFixed(2);
    document.querySelector('#pricecal').innerHTML = '$' + price.toFixed(2) + ' x ' + numberproductincart.toFixed(2)+ `<b> $${cal}</b>` ;
}
calmarket();
fdele = () => {
    document.querySelector('#item').classList.add('d-unset');
    numberproductincart = 0;
    calmarket();
    
}
f1 = () => {
    if (value.innerHTML != 0) {
        value.innerHTML = (parseInt(value.innerHTML) - 1);
    }

}
f2 = () => {
    value.innerHTML = (parseInt(value.innerHTML) + 1);
}
f3 = () => {
    numberproductincart = parseInt(nummarket.innerHTML) + parseInt(value.innerHTML);
    document.querySelector('#item').classList.remove('d-unset');
    calmarket();
}