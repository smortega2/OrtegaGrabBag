// module.exports = function(list, exten){
// 	var path = require('path');
// 	var files = [];
// 	for(var i=0; i < list.length; i++){
// 		if(path.extname(list[i]) == exten){
// 			files.push(list[i]);
// 		}
// 	}
// 	return files;
// }

module.exports = function(dir, filter, checkFiles){
	var path = require('path');
	var fs = require('fs');

	fs.readdir(dir, checkFiles); 
}

function checkFiles(err, list){
	//check the output list of files for
	//the filter, 



}