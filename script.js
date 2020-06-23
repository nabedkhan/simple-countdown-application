const decrease = document.querySelector('.decrease');
const reset = document.querySelector('.reset');
const increase = document.querySelector('.increase');
const valueText = document.querySelector('#value');

let count = 0;
decrease.addEventListener('click', function(){
	if(count > 0){
		count--;
		valueText.textContent = count;
	}
	
});
increase.addEventListener('click', function(){
	count++;
	valueText.textContent = count;
});
reset.addEventListener('click', function(){
	count = 0;
	valueText.textContent = count;
});