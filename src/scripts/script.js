window.onload = cartHeaderBasket
let optionColor1 = document.querySelector('#radio_color1')
let optionColor2 = document.querySelector('#radio_color2')
let optionSize1 = document.querySelector('#radio_1')
let optionSize2 = document.querySelector('#radio_2')
let optionSize3 = document.querySelector('#radio_3')
let optionSize4 = document.querySelector('#radio_4')
let itemMargiela1 = document.querySelector('.buy_btn')
let headerBasket = document.querySelector('.header_basket')
let headerBasketLink = document.querySelector('#basket')
let headerCartLink = document.querySelector('#complete_basket')
let headerCountRound = document.querySelector('.count_round')
itemMargiela1.addEventListener('click', addItemToCart)
itemMargiela1.disabled = true;

optionColor1.addEventListener('click', checkColors)
optionColor2.addEventListener('click', checkColors)
optionSize1.addEventListener('click', checkSizes)
optionSize2.addEventListener('click', checkSizes)
optionSize3.addEventListener('click', checkSizes)
optionSize4.addEventListener('click', checkSizes)

optionColor1.addEventListener('click', buttonDisabler)
optionColor2.addEventListener('click', buttonDisabler)
optionSize1.addEventListener('click', buttonDisabler)
optionSize2.addEventListener('click', buttonDisabler)
optionSize3.addEventListener('click', buttonDisabler)
optionSize4.addEventListener('click', buttonDisabler)




function checkColors(){
    if(optionColor1.checked){
        return true;
    }
    else if(optionColor2.checked){
        return true;
    }
    else{
        return false;
    }
}

function checkSizes(){
    if(optionSize1.checked){
        return true;
    }
    else if(optionSize2.checked){
        return true;
    }
    else if(optionSize3.checked){
        return true;
    }
    else if(optionSize4.checked){
        return true;
    }
    else {
        return false;
    }
}

function buttonDisabler(){
        if(checkColors() == true && checkSizes() == true){
            itemMargiela1.disabled = false;
        }
        else if(checkColors() == false && checkSizes() == false){
            itemMargiela1.disabled = true;
        }
}
itemsCounter = 1;
localStorage.setItem('count', itemsCounter);


function addItemToCart(){
    checkAddCart();
    headerBasket.style.opacity = "1";
    headerCountRound.style.display = 'flex';
    itemsCurrent = localStorage.getItem('count', itemsCounter);
    itemsCounter = itemsCurrent;
    headerCountRound.innerText = itemsCurrent++;
    headerBasketLink.classList.remove('disabled');
    headerCartLink.classList.remove('disabled');
}


function checkAddCart(){
    if(itemMargiela1.value != false){
        localStorage.setItem('value', itemMargiela1.value);
    }
    else{
        return false;
    }
}

function emptyChecking(){
    if(localStorage.getItem('value', itemMargiela1.value) != false){
        return true;
    }
    else{
        return false;
    }
}



function cartHeaderBasket(){
    if(localStorage.getItem('value') !== null){
        headerBasket.style.opacity = "1";
        headerBasketLink.classList.remove('disabled');
        headerCartLink.classList.remove('disabled');
        headerCountRound.style.display = 'flex';
        headerCountRound.innerText = localStorage.getItem('count');
    }
    else{
        headerBasket.style.opacity = "0.4";
        headerBasketLink.classList.add('disabled');
        headerCartLink.classList.add('disabled');
        headerCountRound.style.display = 'none';
    }
}

let numberOrderComplete = document.querySelector('.order_complete')

orderedNumber = 1
localStorage.setItem('order', orderedNumber)
let orderCheker = localStorage.getItem('order')

function orderNumber(){
    if(orderedNumber !== orderCheker){
        orderedNumber++;
        numberOrderComplete.innerText = "Заказ №" + orderedNumber + "Оформлен";
    }
    else{
        return false
    }
}



