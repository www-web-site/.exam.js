const firstNum = prompt('Birinchi sonni kiriting:')
const choice = prompt('Tanlang: \ 1)+ \ 2)- \ 3)/ \ 4)*')
const secondNum = prompt('Ikkinchi sonni tanlang:')
let result = null;

const firstContainer = document.getElementById('first');
const firstT = document.getElementById('firstT');
const secondT = document.getElementById('secondT');
const thirdT = document.getElementById('thirdT');
const check = document.getElementById('check');
const answer = document.getElementById('answer');

if(choice === "1"){
    secondT.textContent = "+"
    result = Number(firstNum) + Number(secondNum)
}
else if(choice === "2"){
    secondT.textContent = "-"
    result = Number(firstNum) - Number(secondNum)
}
else if(choice === "3"){
    secondT.textContent = "/"
    result = Number(firstNum) / Number(secondNum)
}
else if(choice === "4"){
    secondT.textContent = "*"
    result = Number(firstNum) * Number(secondNum)
}
else {
    alert('Operator topilamdi')
}

firstT.textContent = firstNum
thirdT.textContent = secondNum

firstContainer.appendChild(firstT)
firstContainer.appendChild(secondT)
firstContainer.appendChild(thirdT)

check.addEventListener('click', () => {
    answer.textContent = result
    document.body.append(answer)
})