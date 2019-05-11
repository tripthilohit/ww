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
	for (var j=0;j<range;j++)
	{
		for(var k=0;k<range;k++)
		{
			if(a[j]>a[k])
			{
				temp=a[j]
				a[j]=a[k]
				a[k]=temp


			}
		}
		
	}
	console.log("The smaleest random number is: ")
return a[range-1]

}

var n = prompt("Type the index of the smallest random number: ")
var range = prompt('How many random numbers you want to generate? ');
console.log(smallestNumber(range,n))