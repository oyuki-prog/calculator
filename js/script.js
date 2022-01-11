let firstStrNum = ""
let firstNum
let secondStrNum = ""
let secondNum
let resultNum
let firstFlag = 0
let secondFlag = 0
let firstPeriodFlag = 0
let secondPeriodFlag = 0
let operator = ""

let result = document.getElementById('result');

function display(num) {
  if (firstFlag == 0) {
    let strNum
    strNum = String(num)
    firstStrNum += strNum
    firstNum = Number(firstStrNum)
    result.innerText = firstNum
  } else {
    let strNum
    secondFlag = 1
    strNum = String(num)
    secondStrNum += strNum
    secondNum = Number(secondStrNum)
    result.innerText = firstNum + " " + operator + " " + secondNum
  }
}

function period() {
  if (firstFlag == 0 && firstPeriodFlag == 0) {
    firstStrNum = String(firstNum)
    firstStrNum = firstStrNum + "."
    firstPeriodFlag = 1
    result.innerText = firstStrNum
  } else if (operator != "" && secondPeriodFlag == 0) {
    secondStrNum = String(secondNum)
    secondStrNum = secondStrNum + "."
    secondPeriodFlag = 1
    result.innerHTML = firstNum + " " + operator + " " + secondStrNum
  }
}

function calc(ope) {
  if (firstFlag == 0) {
    switch (ope) {
      case 'plus':
        operator = "+"
        break
      case 'minus':
        operator = "-"
        break
      case 'multi':
        operator = "*"
        break
      case 'divide':
        operator = "/"
        break
    }
    firstFlag = 1
    result.innerText = firstStrNum + " " + operator
  }
}

function allClear() {
  operator = ""
  firstStrNum = ""
  firstNum = 0
  secondStrNum = ""
  secondNum = 0
  firstFlag = 0
  resultNum = 0
  result.innerText = 0
}

function equal() {
  if (secondFlag == 1) {
    switch (operator) {
      case '+':
        resultNum = firstNum + secondNum
        break;
      case '-':
        resultNum = firstNum - secondNum
        break
      case '*':
        resultNum = firstNum * secondNum
        break
      case '/':
        resultNum = firstNum / secondNum
        break
    }
    firstFlag = 0
    firstNum = resultNum
    firstStrNum = String(resultNum)
    secondFlag = 0
    secondNum = 0
    secondStrNum = ""
    operator = ""
    firstPeriodFlag = 0
    secondPeriodFlag = 0
    result.innerText = resultNum
  }
}