//Generate 500 random numbers and print nth smallest number 

var prompt = require('prompt-sync')();

var smallestNumber = function(num)
{
	
	var a=[]
	var temp
	for(var i=0;i<num;i++)
	{
		//a[i]= Math.random()
		a[i]=Math.floor(Math.random() * 100000);
		console.log("random numbers: "+a[i])
	}
	for (var j=0;j<num;j++)
	{
		for(var k=0;k<num;k++)
		{
			if(a[j]>a[k])
			{
				temp=a[j]
				a[j]=a[k]
				a[k]=temp


			}
		}
		
	}
return a[num-1]

}


var n = prompt('How many more times? ');
console.log(smallestNumber(n))