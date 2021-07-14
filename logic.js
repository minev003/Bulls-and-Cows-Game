
var pcNum = '';

function randomNumber(){
return Math.floor(Math.random()*10);
}

function createPcNum(){
 	pcNum += randomNumber();

	while (pcNum.length < 4) {
	 	var num = randomNumber().toString();
	 		if (!pcNum.includes(num)) {
	 			pcNum += num;
	 		}
	 	} 	
console.log('createPcNum: '+pcNum);
}
createPcNum()

function removeDoubleNumber(){
	var input = document.getElementById('try').value;
	lastNum = input.charAt(input.length - 1);
	nums = input.slice(0, -1);

	if (nums.includes(lastNum)) {
		document.getElementById('try').value = nums;
	}
}

function check(){

	var userNum = document.getElementById('try').value;

			var pcNumber = pcNum.toString();
			var userNumber = userNum.toString();
			var Bulls = 0;
			var Cows = 0;

			for (let i = 0; i <= 3; i++) {
				//console.log(userNumber.charAt(i));
				if (userNumber.charAt(i) === pcNumber.charAt(i)) {
					Bulls++;
					continue;
				}
				if (pcNumber.includes(userNumber.charAt(i))) {
					Cows++
				}
			}

 var resultBulls = document.getElementsByClassName('Bulls')[0].innerText='bulls: '+Bulls;
 var resultCows = document.getElementsByClassName('Cows')[0].innerText='Cows: '+Cows;

}
	



