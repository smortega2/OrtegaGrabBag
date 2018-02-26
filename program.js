/**  MY FIRST ASYNC I/O!  **/
//var fs = require('fs') 

//var buf = fs.readFileSync(process.argv[2]);
//var str = buf.toString();
//var arr = str.split('\n');

//console.log(arr.length -1);

/**  FILTERED LS  **/
// var fs = require('fs');
// var path = require('path');

// fs.readdir(process.argv[2], printFiles);

// function printFiles(err, list){
// 	var exten = "." + process.argv[3];
// 	for(var i=0; i < list.length; i++){
// 		if(path.extname(list[i]) == exten){
// 			console.log(list[i]);
// 		}
// 	}
// }

/**  MAKE IT MODULAR  **/
var mymodule = require('./programModule.js');
var fs = require('fs');
var path = require('path');
var exten = "." + process.argv[3];
fs.readdir(process.argv[2], printFiles); 
function printFiles(err, list){
	if(err != null){ 
		console.log("error");
		return;
	}
	var files = mymodule(list, exten);
	for(var i=0; i < files.length; i++){
		console.log(files[i]);
	}
}







