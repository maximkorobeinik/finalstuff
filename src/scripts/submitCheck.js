

let email = document.querySelector('#submit_email')
let phone = document.querySelector('#submit_phone')
let city = document.querySelector('#submit_city')
let address = document.querySelector('#submit_addr')
let submitBtn = document.querySelector('.submit_order_btn_pay')
submitBtn.disabled = true

email.addEventListener('keyup', checkSubmitForm)
phone.addEventListener('keyup', checkSubmitForm)
city.addEventListener('keyup', checkSubmitForm)
address.addEventListener('keyup', checkSubmitForm)
submitBtn.addEventListener('click', goToComplete)

let headerBasket = document.querySelector('.header_basket')
let headerBasketLink = document.querySelector('#basket')
let headerCartLink = document.querySelector('#complete_basket')
let headerCountRound = document.querySelector('.count_round')


function checkSubmitForm(){
    if(email.value !== false && phone.value !== "" && city.value !== "" && address.value !== ""){
        submitBtn.disabled = false
    }
    else{
        submitBtn.disabled = true
    }
}

function goToComplete(){
    window.location = 'order_complete.html';
    localStorage.clear();
}





// "Заказ №" + orderedNumber + "Оформлен"


