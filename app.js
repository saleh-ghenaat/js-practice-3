function Computing(){
    const num1 = document.getElementById("num-one").value
    const num2 = document.getElementById("num-two").value
    const operator = document.getElementById("select").value
    const calculater = {
        result:'',
    sum: (firstNum, lastNum) => {

        return +firstNum + +lastNum
    },
    multiplication: (firstNum, lastNum) => {

        return firstNum * lastNum
    },
    division: (firstNum, lastNum) => {

        return firstNum / lastNum
    },
    minus: (firstNum, lastNum) => {

        return firstNum - lastNum
    }
    }
    switch (operator) {
        case '+':
        calculater.result=calculater.sum(num1, num2);
        document.getElementById('valu1').innerHTML =`${num1} + ${num2} = ${ calculater.result}`;
            break;
        case '*':
            calculater.result=calculater.multiplication(num1, num2);
            document.getElementById('valu1').innerHTML =`${num1} * ${num2} = ${ calculater.result}`;
            break;
        case '-':
            calculater.result=calculater.minus(num1, num2);
            document.getElementById('valu1').innerHTML =`${num1} - ${num2} = ${ calculater.result}`;
            break;
        case '/':
            calculater.result=calculater.division(num1, num2);
            document.getElementById('valu1').innerHTML =`${num1} / ${num2} = ${ calculater.result}`;
            break;
    
        default:
            alert('Select the operator')
            break;
    }
    
    console.log(calculater);
}

