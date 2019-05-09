var res1;
var res;
//var t;
var usingSelectorsDemo = function(driver)
{
driver
	//Navigate to the website
    .url("https://www.weightwatchers.com/us/")
    .windowMaximize("current")
    .waitForElementVisible('body', 2000)
    .useXpath()
    //Verify loaded page title matches
    .assert.title('Weight Loss Program, Recipes & Help | Weight Watchers')
   	//click on “Find a Meeting”
   	.click("//a[@class='find-a-meeting']")
   	.pause(5000)
   	//Verify loaded page title contains “Get Schedules &amp; Times Near You”
   	//.expect.element('title').text.to.contain('Get Schedules & Times Near You | Weight Watchers')
/*
driver.getText("//title",function(result)
		{	 t = JSON.stringify(result);
			console.log('t: '+ t)
			//console.log('First result and the distance: '+ result.value)
		}
		)
		*/

	//In the search field, search for meetings for zip code: 10011
	driver
	.click("//input[@id='meetingSearch']")
	.setValue("//input[@id='meetingSearch']","10011")
	.keys(driver.Keys.ENTER)
	.pause(4000)
	// Print the title of the first result and the distance (located on the right of location title/name)
 	driver.getText("(//div[@class='location__top'])[1]",function(result)
		{	 res = result.value;
			console.log('First result and the distance: '+ res)
			//console.log('First result and the distance: '+ result.value)
		}
		)
	// Click on the first search result and then, verify displayed location name matches with the name of the first searched result that was clicked.
	.click("(//div[@class='location__top'])[1]")
	driver.getText("//div[@class='location__name']",function(result)
		{	res1 = result.value;
			//console.log('On clicking: '+ res1)
			//console.log('On clicking: '+ result.value)
			var i= res.includes(res1)
			//console.log("i = "+i)

			if(i==true)
				{
					console.log("Displayed location name matches with the name of the first searched result")
				}
			else
			{
				console.log("Displayed location name does not match with the name of the first searched result")
			}
		}
		
		)   
	

}

var getTodaysHours = function(driver)
{
	// From this location page, print TODAY’s hours of operation (located towards the bottom of the page)
	driver
	.execute('scrollTo(600,600)')
	.pause(1000)
	.useXpath()
	//get todays date
	var d= new Date();
	//get today's day value
	var n=d.getDay();
	//console.log(n);
	//if value is 1, the day is Saturday
	if(n==1)
	{
		driver.getText("(//div[@ng-repeat='meeting in day.meetings'])[24]",function(result)
		{	
			console.log('Saturday '+ result.value);
		}
		)

	}
	//if value is 2, the day is Sunday
	else if(n==2)
{
driver.getText("(//div[@ng-repeat='meeting in day.meetings'])[25]",function(result)
		{	
			console.log('Sunday '+ result.value);
		}
		)
}//if value is 3, the day is Monday
	else if(n==3)
{
driver.getText("(//div[@ng-repeat='meeting in day.meetings'])[26]",function(result)
		{	
			console.log('Monday '+ result.value);
		}
		)
	driver.getText("(//div[@ng-repeat='meeting in day.meetings'])[27]",function(result)
		{	
			console.log('       '+ result.value);
		}

		)
	driver.getText("(//div[@ng-repeat='meeting in day.meetings'])[28]",function(result)
		{	
			console.log('       '+ result.value);
		}

		)
}
//if value is 4, the day is Tuesday
	else if(n==4){
	driver.getText("(//div[@ng-repeat='meeting in day.meetings'])[29]",function(result)
		{	
			console.log('Tuesday '+ result.value);
		}
		)
	driver.getText("(//div[@ng-repeat='meeting in day.meetings'])[30]",function(result)
		{	
			console.log('        '+ result.value);
		}

		)
}
//if value is 5, the day is Wednesday
else if(n==5)
{
driver.getText("(//div[@ng-repeat='meeting in day.meetings'])[31]",function(result)
		{	
			console.log('Wednesday '+ result.value);
		}
		)
	driver.getText("(//div[@ng-repeat='meeting in day.meetings'])[32]",function(result)
		{	
			console.log('          '+ result.value);
		}

		)
}
//if value is 6, the day is Thursday
else if(n==6)
{
	driver.getText("(//div[@ng-repeat='meeting in day.meetings'])[33]",function(result)
		{	
			console.log('Thursday '+ result.value);
		}
		)
	driver.getText("(//div[@ng-repeat='meeting in day.meetings'])[34]",function(result)
		{	
			console.log('        '+ result.value);
		}

		)
	driver.getText("(//div[@ng-repeat='meeting in day.meetings'])[35]",function(result)
		{	
			console.log('        '+ result.value);
		}

		)

}
//if value is 7, the day is Friday
else if(n==7)
{
	driver.getText("(//div[@ng-repeat='meeting in day.meetings'])[36]",function(result)
		{	
			console.log('Friday '+ result.value);
		}
		)
	driver.getText("(//div[@ng-repeat='meeting in day.meetings'])[37]",function(result)
		{	
			console.log('       '+ result.value);
		}

		)
	driver.getText("(//div[@ng-repeat='meeting in day.meetings'])[38]",function(result)
		{	
			console.log('      '+ result.value);
		}

		)


}
}


module.exports={
	usingSelectorsDemo: usingSelectorsDemo,
	getTodaysHours: getTodaysHours
}