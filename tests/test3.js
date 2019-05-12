//Generate 500 random numbers and print nth smallest number 

var prompt = require('prompt-sync')();

var smallestNumber = function(range, n)
{
	
	var a=[]
	var temp
	for(var i=0;i<range;i++)
	{
		//a[i]= Math.random()
		a[i]=Math.floor(Math.random() * 100000);
		console.log("random numbers: "+a[i])
	}
	a.sort()
	console.log(a)
	console.log("The "+n+" smallest random number is: ")
return a[n-1]

}


var range = prompt('How many random numbers you want to generate? ');
var n = prompt("Type the index of the smallest random number: ")
console.log(smallestNumber(range,n))