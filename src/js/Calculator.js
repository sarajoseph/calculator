class CalculatorController {
	constructor(){
		this.currentValue = document.getElementById('calculatorScreenCurrentValue');
		this.previousValue = document.getElementById('calculatorScreenPreviousValue');
		this.buttonsNumber = document.getElementsByClassName('button-number');
		this.btnDeleteAll = document.getElementById('btnDeleteAll');
		this.btnEquals = document.getElementById('btnEquals');
		this.btnPlus = document.getElementById('btnPlus');
		this.btnMinus = document.getElementById('btnMinus');
		this.btnTimes = document.getElementById('btnTimes');
		this.btnDivide = document.getElementById('btnDivide');
		this.btnPercentage = document.getElementById('btnPercentage');
		this.btnDecimal = document.getElementById('btnDecimal');
	}
	
	init(){
		console.log('CalculatorController init');
		
		for(let i = 0; i < this.buttonsNumber.length; i++){
			this.buttonsNumber[i].addEventListener('click', () => this.setCurrentValue(this.buttonsNumber[i].innerHTML));			
		}
		
		this.btnDeleteAll.addEventListener('click', () => this.deleteAll());
		this.btnEquals.addEventListener('click', () => this.operation());
		this.btnPlus.addEventListener('click', () => this.updateDisplay('+'));
		this.btnMinus.addEventListener('click', () => this.updateDisplay('-'));
		this.btnTimes.addEventListener('click', () => this.updateDisplay('x'));
		this.btnDivide.addEventListener('click', () => this.updateDisplay('÷'));
		this.btnPercentage.addEventListener('click', () => this.updateDisplay('%'));
		this.btnDecimal.addEventListener('click', () => this.setDecimalValue());

	}	

	setCurrentValue(value){
		this.currentValue.append(value);
	}

	updateDisplay(operand){
		this.previousValue.innerHTML = this.currentValue.innerHTML+operand;
		this.currentValue.innerHTML = '';
	}

	deleteAll(){
		this.currentValue.innerHTML = '';
		this.previousValue.innerHTML = '';
	}

	setDecimalValue(){
		if(this.currentValue.innerHTML.indexOf('.') === -1){
			this.setCurrentValue('.');
		}
	}

	operation(){
		let result;
		let num1 = parseFloat(this.previousValue.innerHTML.substring(0, (this.previousValue.innerHTML.length - 1)));
		let num2 = parseFloat(this.currentValue.innerHTML);
		let operand = this.previousValue.innerHTML.substr(this.previousValue.innerHTML.length - 1);
		
		switch(operand){
			case '+':
				result = num1 + num2;
				break
			case '-':
				result = num1 - num2;
				break
			case 'x':
				result = num1 * num2;
				break
			case '÷':
				result = num1 / num2;
				break
			case '%':
				result = num1 % num2;
				break
			default:
				return
		}
		this.previousValue.innerHTML = '';
		this.currentValue.innerHTML = result;
	}

}

new CalculatorController().init();