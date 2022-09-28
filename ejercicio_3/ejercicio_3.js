//factorial de un numero usando FOR

function factorialFor(num) {
	let factorial = 1; 
	
	for (i=1; i <= num; i++) {
		factorial = factorial * i; 
	}

	console.log(`Èl factorial de num es: ${factorial}`); 
}

factorialFor(10);


//factorial de un numero usando WHILE.

function factorialWhile(num){
	let factorialwhile = 1;

	while(num > 1){
		factorialwhile = factorialwhile * num;
		num--;
	}
	console.log(`Èl factorial de num usando While es: ${factorialwhile}`)
}

factorialWhile(10);


//factorial usando while + break
function factorialBreak(num){
	let factorialbreak = 1;

	while(num > 1){
		factorialbreak = factorialbreak * num;
		num--;

		if(factorialbreak === 3628800){
			break;
		}
	}


	console.log(`Èl factorial de num usando While + break es: ${factorialbreak}`)
}

factorialBreak(10);












