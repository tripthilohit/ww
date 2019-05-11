var fs = require('fs')

var data = fs.readFileSync('tests/dictionary.txt');
var testData = {};
var temp = {}
var splitList = data.toString().split('\n');
for (var i = 0; i < splitList.length; i++) {
     testData['key' + i.toString()] = splitList[i];
	var splitAgain = splitList[i].split(',');
     for(var j = 0; j < splitAgain.length; j++)
     testData['value' + j.toString()] = splitAgain[j];
}
console.log(testData)

/*fs.readFileSync('tests/dictionary.txt', 'utf8', function(err,data) {
    if(err) throw err;
    var obj = {};
    var splitted = data.toString().split("\n");
    for (var i = 0; i<splitted.length; i++) {
        var splitLine = splitted[i].split("-");
        obj[splitLine[0]] = obj.splittLine[1].split(" ");
    }
    console.log("heelll")
    console.log(obj);
});
*/
/*
var data = fs.readFileSync('tests/dictionary.txt');
var obj = {};
//var replace = data.toString().replace('-',',')
var splitted = data.toString().split('\n');
for (var i = 0; i < splitted.length; i++) {
	var splitLine = splitted[i].split("-")
     //obj[splitLine[0]] = obj.splitLine[1].split(",");;
     console.log(splitLine)
}
*/
/*
var data = fs.readFileSync('tests/dictionary.txt');
var splitList = data.toString().split('-');
for(var i in splitList)
{
	var splitLine = JSON.parse(splitList[i])
}
*/