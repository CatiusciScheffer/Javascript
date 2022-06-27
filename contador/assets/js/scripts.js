let count = 0;

const CURRENT_NUMBER = document.getElementById('currentNumber');

function increment() {
	count++;
	CURRENT_NUMBER.innerHTML = count;
	if (count < 0)
	CURRENT_NUMBER.style.color = '#d00000';

	else
	CURRENT_NUMBER.style.color = '#006d77';
}

function decrement() {
	count--;
	CURRENT_NUMBER.innerHTML = count;
	if (count < 0)
    	CURRENT_NUMBER.style.color = '#d00000';
	
	else
	CURRENT_NUMBER.style.color = '#006d77';
}


    
