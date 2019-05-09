//Generate 500 random numbers and print nth smallest number 

var a=[];
var n=10;
var generateRandom = function()
{
	//generating 500 random numbers
	for(var i=0; i<10 ;i++)
	{
 a[i]= Math.random()
	}
	//Printing 500 random numbers on the console
for(var i=0; i<10 ;i++)
	{
		console.log(a[i])
	}

//Sorting all 500 random numbers 
	for(var i=0; i<10 ; i++)
	{
		for(var j=0; j<(10-i); j++)
		{
			if(a[j-1] > a[j])
			{
          	t = a[j-1];
          	a[j-1]=a[j];
          	a[j]=t;
			}
		}
	}
	//Print the nth smallest value
	console.log("The smallest"+ n +"  number is : "+a[n-1])

}
module.exports={
	generateRandom: generateRandom
	
}