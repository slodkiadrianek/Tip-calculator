'use strict'

const boxPercentage = document.querySelectorAll('.box')
const inputAmount = document.querySelector('.input__amount')
const inputNumber = document.querySelector('.input__number')
const tipAmount = document.querySelector('.tip__amount')
const tipTotal = document.querySelector('.tip__total')
const reset = document.querySelector('.reset')
const warning = document.querySelector('.warning')
const inputPercent = document.querySelector('.input__percent')

console.log(`Yes`);

function wrong(){
     inputNumber.style.outline = ' red 3px solid'
           inputNumber.style.borderRadius = '5px'
           warning.textContent= `Can't be zero`
}
function style(){
     this.style.backgroundColor = 'var(--StrongCyan)'
            this.style.color = 'var(--VeryDarkCyan)'
}

boxPercentage.forEach(function(el){
    el.addEventListener('click', function(e) {
        if(inputAmount.value >0 && inputNumber.value > 0){
            const percentage = Number.parseInt(el.textContent)
            const calcTipAmount = ((inputAmount.value * percentage) /100)/inputNumber.value
            const calcTipTotal = +inputAmount.value + +(+calcTipAmount * +inputNumber.value)
            tipAmount.textContent = +calcTipAmount.toFixed(2)
            tipTotal.innerHTML   = +calcTipTotal.toFixed(2)
            updateUI()
            style.bind(el)
        }else if(!inputNumber.value) {
          wrong()
        }
    })
})

function updateUI(){
if(+tipAmount.textContent > 0){
    reset.classList.add('reset__active') 
    boxPercentage.forEach(el => {
        el.style.backgroundColor = 'var(--VeryDarkCyan)'
        el.style.color = ' var(--White)'
    })
    inputNumber.style.outline = 'transparent 3px solid'
    inputNumber.style.borderRadius = '5px'
    warning.textContent = ' '
} 
}
reset.addEventListener('click', function(){
    if(+tipAmount.textContent > 0){
        console.log(`yes`);
        inputAmount.value = inputNumber.value = ' '
        tipAmount.textContent = tipTotal.textContent= '0.00'
        boxPercentage.forEach(el => {
        el.style.backgroundColor = 'var(--VeryDarkCyan)'
        el.style.color = ' var(--White)'
        inputNumber.style.outline = 'transparent 3px solid'
        inputNumber.style.borderRadius = '5px'
        warning.textContent = ' '
        inputPercent.value = ' '
        reset.classList.remove('reset__active')
    })
    } 
})

inputPercent.addEventListener('input', function(){
    if(inputAmount.value >0 && inputNumber.value > 0){
            const percentage = Number.parseInt(inputPercent.value)
            const calcTipAmount = ((inputAmount.value * percentage) /100)/inputNumber.value
            const calcTipTotal = +inputAmount.value + +(+calcTipAmount * +inputNumber.value)
            tipAmount.textContent = +calcTipAmount.toFixed(2)
            tipTotal.innerHTML   = +calcTipTotal.toFixed(2)
            updateUI()
            boxPercentage.forEach(el => style.bind(el))
            
        }else if(!inputNumber.value) {
          wrong()
        }
})

