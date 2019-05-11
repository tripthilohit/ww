var fs = require('fs')


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

/*
var data = fs.readFileSync('tests/dictionary.txt');
var testData = {};
var temp = {}
var splitList = data.toString().split('\n');
for (var i = 0; i < splitList.length; i++) {
     testData['key' + i.toString()] = splitList[i];
	var splitAgain = splitList[i].split(/[-,]/);
     //for(var j = 0; j < splitAgain.length; j++)
     //testData['value' + j.toString()] = splitAgain[j];
}
console.log(testData)
*/
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