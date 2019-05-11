//Create a method called doesFileExist(String path) which takes the path of the file and tells the user if the file exists at that path or not. 
//Assume all paths are relative to your project structure. If the file does not exist, catch the requisite exception.
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




//replace - with ,
fs.readFileSync('tests/dictionary.txt', 'utf8', function(err,data) {
    if(err) throw err
    var obj = {};
    var splitted = data.toString().split("\n");
    for (var i = 0; i<splitted.length; i++) {
        var splitLine = splitted[i].split("-");
        obj[splitLine[0]] = obj.splittLine[1].split(" ");
    }
    console.log(obj);
});
/*
for (var i = 0; i < k.length; i+2)
{
	dict.push({key: k[i]})
	//var z = fs.readFileSync(path).toString().split(',');
	//dict.push({value: z[i]})
	console.log(k[i])
}

*/

/*
for (var i = 0; i < v.length; i++){
	//splitting the previous array into another sub array separated by hyphen
	var z = v[i].split("-")

	for(var j=0; j < z.length; j++){
		//splitting the previous array into another sub array separated by comma
		var y = z[j].split(",")
		for(var k=0; k < y.length; k++){
			//printing the results on console
		console.log(y[k])
		}
	
	}
}

*/

