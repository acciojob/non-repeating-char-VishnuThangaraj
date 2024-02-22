function firstNonRepeatedChar(str) {
 // Write your code here
	const map = new Map();

	for(let letter of str){
		if(map.has(letter)){
			map.set(letter, map.get(letter)+1);
		}
		else{
			map.set(letter, 1);
		}
	}

	for(let letter of str){
		
		if(map.get(letter)==1) return letter;
	}

	return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
