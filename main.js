let btnSubmit = document.getElementById('submit');
let btnDiscount = document.getElementById('apply_discount_btn')
let escortFieldset = document.getElementById('escortFieldset');
let transportFieldset = document.getElementById('transportFieldset');
let securityFieldset = document.getElementById('securityFieldset');

let escortCheckboxes = escortFieldset.querySelectorAll("input[type=checkbox]");
let transportCheckboxes = transportFieldset.querySelectorAll("input[type=checkbox]")
let securityRadio = securityFieldset.querySelectorAll("input[type=radio]")
let securityCheckbox = document.getElementById('security-4');

let totalService = [];

function escortService(){
    let escortSum = 0;
    for(let i = 0; i < escortCheckboxes.length; i++){
        escortCheckbox = escortCheckboxes[i]
        if(escortCheckbox.checked){
            escortSum += parseInt(escortCheckbox.value)
            
        }
    }
    totalService.push(escortSum)
    document.getElementById('escort-total').textContent = ` ${escortSum}`
   
}

function transportService(){
    let transportSum = 0;
    for(let i = 0; i < transportCheckboxes.length; i++){
        transportCheckbox = transportCheckboxes[i]
        if(transportCheckbox.checked){
            transportSum += parseInt(transportCheckbox.value)
        }
    }
    totalService.push(transportSum)
    document.getElementById('transportation-total').textContent = ` ${transportSum}`
    
}

function securityService(){
    let securitySum = 0;
    for(let i = 0 ; i < securityRadio.length; i++){
        if(securityRadio[i].checked){
            if(securityCheckbox.checked){
                securitySum = ((parseFloat(securityRadio[i].value)) + (parseFloat(securityCheckbox.value)))
            }
            else{
                securitySum += parseFloat(securityRadio[i].value)
                
            }
        }
    }
    totalService.push(securitySum)
    document.getElementById('security-total').textContent = ` ${securitySum}`
}
function getDiscount(){
    let discountCode = document.getElementById('discount_code')
    let discountValue = discountCode.value;
    let discount = 0;
    // get the total Sum of goods sold
    let totalSum = 0;
    for(let i = 0; i < totalService.length; i++){
        totalSum += totalService[i];
    }
    let vat = (0.05 * totalSum)
    if(discountValue.toUpperCase() === "TGWLUV23"){
        discount = 0.01 * totalSum
    }
    let discountAmount = document.getElementById('discount_amount')
    discountAmount.textContent = discount
    totalSales = ((totalSum + vat) - discount)
    totalDisplay = document.getElementById('total');
    totalDisplay.textContent = totalSales;

    //DISPLAY OUTPUT
    document.getElementById('subtotal').textContent = ` ${totalSum + vat}`
    document.getElementById('vat-total').textContent = `${vat}`
}

function displayTotal(){
    let totalSum = 0;
    for(let i = 0; i < totalService.length; i++){
        totalSum += totalService[i];
    }
    let vat = (0.05 * totalSum)
    document.getElementById('total').textContent = `${totalSum + vat}`;
    document.getElementById('subtotal').textContent = ` ${totalSum + vat}`
    document.getElementById('vat-total').textContent = `${vat}`
}
btnSubmit.addEventListener('click', escortService)
btnSubmit.addEventListener('click', transportService)
btnSubmit.addEventListener('click', securityService)
btnSubmit.addEventListener('click', displayTotal)
btnDiscount.addEventListener('click', getDiscount)

// JavaScript code to toggle active class on hamburger menu click
      const hamburger = document.querySelector(".hamburger");
      const nav = document.querySelector("nav");

      hamburger.addEventListener("click", () => {
        nav.classList.toggle("active");
      });