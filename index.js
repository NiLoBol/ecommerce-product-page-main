const value = document.querySelector('#valuenum');

const value2 = document.querySelector('#valuenum2');
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
        value2.innerHTML = value.innerHTML;
    }

}
f2 = () => {
    value.innerHTML = (parseInt(value.innerHTML) + 1);
    value2.innerHTML = value.innerHTML;
}
f3 = () => {
    numberproductincart = parseInt(nummarket.innerHTML) + parseInt(value.innerHTML);
    document.querySelector('#item').classList.remove('d-unset');
    calmarket();
}
fl=()=>{
    console.log('ll');
    const imgbig =document.querySelector("#imgbig");
    const img02 =document.querySelectorAll('.img02')
    if(imgbig.alt == 0){
        console.log(imgbig.alt);
    }
    else{
        const num = parseInt(imgbig.alt);
        imgbig.src = img02[(num-1)].src;
        imgbig.alt = (num-1);
        img02[num].classList.remove('active')
        img02[num-1].classList.add('active')
    }
}
fr=()=>{
    console.log('rr');
    const imgbig =document.querySelector("#imgbig");
    const img02 =document.querySelectorAll('.img02')
    if(imgbig.alt == 3){
       console.log(imgbig.alt);
    }
    else{
        const num = parseInt(imgbig.alt);
        imgbig.src = img02[(num+1)].src
        imgbig.alt = (num+1);
        img02[num].classList.remove('active')
        img02[num+1].classList.add('active')
    }
}
imgopen =(e)=>{
    const img = document.querySelector('#clickimg').classList.remove('d-none')
    const imgbig= document.querySelector('#imgbig').src =e.src;
}
imgclose =()=>{
    const img = document.querySelector('#clickimg').classList.add('d-none')
}
changeimg =(e)=>{
    const product= document.querySelector('#product').src =e.src
    const removeborder =document.querySelectorAll('.img-r1,.w-20')
    removeborder.forEach(e => {
        console.log(e);
        e.classList.remove('active')
    });
    e.classList.add('active')
}
changeimg2 =(e)=>{
    const product= document.querySelector('#imgbig').src =e.src
    const removeborder =document.querySelectorAll('.img-r1,.w-20')
    const imgbig =document.querySelector("#imgbig");
    console.log(e.alt);
    imgbig.alt =e.alt
    removeborder.forEach(e => {
        e.classList.remove('active')
    });
    e.classList.add('active')
}

