const inputOne  = document.querySelector('.inputOne')
const inputTwo  = document.querySelector('.inputTwo')

const plusBtn  = document.querySelector('.plus')
const minusBtn  = document.querySelector('.minus')
const umnBtn  = document.querySelector('.umn')
const delBtn  = document.querySelector('.del')

const btnResult  = document.querySelector('.btnResult')
const resultEl  = document.querySelector('.result')

let action = '+'

// функция действия + или -
plusBtn.onclick = function () {
    action = '+'
}
minusBtn.onclick = function () {
    action = '-'
}
umnBtn.onclick = function () {
    action = 'x'
}
delBtn.onclick = function () {
    action = '/'
}
function printResult(result){
    if (result < 0 ){
        resultEl.style.color = 'red'
    }else{
        resultEl.style.color = 'green'
    }
    resultEl.textContent = result
}

// Функция расчета
btnResult.onclick = function () {
    if (action === '+'){
        const sum = Number(inputOne.value) + Number(inputTwo.value)
        printResult(sum)
    }else if ( action === '-') {
        const sum = Number(inputOne.value) - Number(inputTwo.value)
        printResult(sum)
    }else if ( action === 'x') {
        const sum = Number(inputOne.value) * Number(inputTwo.value)
        printResult(sum)
    }else if ( action === '/') {
        const sum = Number(inputOne.value) / Number(inputTwo.value)
        printResult(sum)
    }
    
}