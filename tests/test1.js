//Create a method called doesFileExist(String path) which takes the path of the file and tells the user if the file exists at that path or not. 
//Assume all paths are relative to your project structure. If the file does not exist, catch the requisite exception.
/*Read each word and its possible meanings and print them out. Your output should look like this:
Word1
Meaning 1
Meaning 2
Word2
Meaning1
Meaning2
Use appropriate data structures wherever necessary.*/

var prompt = require('prompt-sync')();
var fs = require('fs'),
  stats;
//path = './Users⁩/tripthishetty⁩/Desktop⁩/ww⁩/tests⁩/dictionary.txt',
var path = prompt('Enter the path of the file:')
var doesFileExist = function(path)
{
	try{
	 	stats = fs.statSync(path)
  		console.log("File exists.")
		} catch (e) {
  			console.log("File does not exist.")
  			throw e
					}
}
doesFileExist(path)
var data = fs.readFileSync('tests/dictionary.txt');
var userArray =data.toString().split('\n');
for(var i=0;i<userArray.length;i++){
    var u=userArray[i];
    var t=[];
    var temp=u.split(/[-,]/);
    for(var j=0;j<temp.length;j++)
    {
    t.push(temp[j]);
    console.log(temp[j])
    }
}