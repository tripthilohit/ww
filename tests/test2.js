var prompt = require('prompt-sync')();

var usingSelectorsDemo = function(driver)
{
driver
//1. Navigate to the website
    .url(driver.globals.userNames.URL)
    .windowMaximize("current")
    .waitForElementVisible('body', 2000)
    .useXpath()
 //2. Verify loaded page title matches
    .verify.title('WW (Weight Watchers): Weight Loss & Wellness Help')
 //3. On the right corner of the page, click on “Find a Studio”
   	.waitForElementVisible("//a[@class='find-a-meeting']")
   	.click("//a[@class='find-a-meeting']")
 //4. Verify loaded page title contains “Find WW Studios & Meetings Near You | WW USA”
  		 /*	
   			.getTitle((title) => {
   			 driver.verify.containsText(title, 'Studios & Meetings Near You | WW USA')
   				})
   		*/
   		/*
   			.getTitle((title) => {
   			driver.expect.element(title).text.to.equal("Studios & Meetings Near You | WW USA")})
		*/
	.getTitle(function(title){
		this.assert.ok(title.includes("Studios & Meetings Near You | WW USA"))
	})
//5. In the search field, search for meetings for zip code: 10011
	.waitForElementVisible("//input[@id='meetingSearch']")
	.click("//input[@id='meetingSearch']")
	.setValue("//input[@id='meetingSearch']","10011")
	.keys(driver.Keys.ENTER)
//6. Print the title of the first result and the distance (located on the right of location title/name)	
	driver.getText("(//div[@class='location__name'])[1]",function(firstLocationtName1)
		{	 var firstLocationtName1 = firstLocationtName1.value;
			console.log('First location name is: '+ firstLocationtName1)

			driver.getText("(//div[@class='location__distance'])[1]",function(firstLocationDistance){
				var firstLocationDistance = firstLocationDistance.value
				console.log('First location distance is: '+ firstLocationDistance)
			})
//7. Click on the first search result and then, verify displayed location name/title matches with the name of the first searched result that was clicked.
			driver.waitForElementVisible("(//div[@class='location__name'])[1]",2000)
			driver.click("(//div[@class='location__name'])[1]")
			driver.assert.containsText("(//div[@class='location__name'])[1]",firstLocationtName1)
							
		})
//8. From this location page, print TODAY’s hours of operation (located towards the bottom of the page)
	driver.getText("//div[@class='hours-list-item-wrapper hours-list--currentday']",function(result)
	{
		console.log("TODAY's hours of operation:\n "+result.value)
	})

}
//9. Create a method to print the number of meeting the each person(under the scheduled time) has a particular day of the week
//e.g. printMeetings("Sun")
//Output should be:
//Person A  3
//Person B  1
var hello = function(driver)
{
 var printMeetings = function(day)
{
  var k
	for(var i=1;i<=7;i++)
		{	console.log("outout"+i)
			driver.getText("(//div[@class='schedule-detailed-day-label'])["+i+"]",function(result)
				{
					console.log(result.value)
					if(result.value===day)
						k=i
					console.log(k)
				})
		}					
	/*driver.elements("xpath","(//div[@class='schedule-detailed-day-meetings'])[3]/div",function(result)
							{	console.log("in in"+i)
								var c = 1
								var res = result.value.length
								console.log(res)
								for(var j=1;j<=res;j++)
								{
									 driver.getText("(//div[@class='schedule-detailed-day-meetings'])["+k+"]/div[1]/div["+j+"]",function(result)
									{
										console.log(result.value)
									})
									
								}
							})
						}
						
				})

		}*/
}

printMeetings(driver.globals.userNames.day)
}



module.exports={
	//usingSelectorsDemo: usingSelectorsDemo,
	hello:hello
	
}