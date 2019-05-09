var fs = require('fs'),
//dictionary.txt contains the input dictionary file
  path = './Users⁩/tripthishetty⁩/Desktop⁩/ww⁩/tests⁩/dictionary.txt',
 stats;

//Using try and catch exception to find if a file exists or not
try {
  stats = fs.statSync(path);
  console.log("File exists.");
  //Splitting the file first into an array seprated by new line
  var v = fs.readFileSync(path).toString().split('\r\n');

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
}
catch (e) {
  console.log("File does not exist.");
}