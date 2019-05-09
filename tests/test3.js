//Generate 500 random numbers and print nth smallest number 

var smallestNumber = function(num)
{
	var a=[]
	var temp
	for(var i=0;i<10;i++)
	{
		//a[i]= Math.random()
		a[i]=Math.floor(Math.random() * 100000);
		console.log("random numbers: "+a[i])
	}
	for (var j=0;j<10;j++)
	{
		for(var k=0;k<10;k++)
		{
			if(a[j]>a[k])
			{
				temp=a[j]
				a[j]=a[k]
				a[k]=temp


			}
		}
		
	}
return a[num]
}

console.log(smallestNumber(9))