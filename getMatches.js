var boys = ['jay', 'matt', 'luke', 'sal', 'kevin', 'juan', 'daniel', 'david'];
var girls = ['nina', 'salina', 'angela', 'eliana', 'jenna', 'becky', 'cassy'];
var GE = ['kevin', 'juan', 'daniel', 'david', 'jenna'];
var BR = ['jay', 'matt','nina', 'salina'];
var MU = ['angel'];
var NL = ['eliana'];
var AR = ['luke', 'sal', 'becky', 'cassy'];

var matchDict = {};
var unmatchedBoys = ['jay', 'matt', 'luke', 'sal', 'kevin', 'juan', 'daniel', 'david'];
var unmatchedGirls = ['nina', 'salina', 'angela', 'eliana', 'jenna', 'becky', 'cassy'];

function getList(familyCode){
	//clear table
	if(familyCode == "GE") putMatches(GE);
	if(familyCode == "BR") putMatches(BR);
	if(familyCode == "MU") putMatches(MU);
	if(familyCode == "NL") putMatches(NL);
	if(familyCode == "AR") putMatches(AR);
}

function putMatches(familyArray){
	console.log(familyArray);
    var tbl= document.getElementById("famMatches"); //get table

    document.body.appendChild(btn);
	for(var person in familyArray){
		var row = document.createElement("TR");
		var col1 = document.createElement("TD");
		var col2 = document.createElement("TD");

		var match = "test";//matchDict[person];

		var p = document.createTextNode(person);
    	col1.appendChild(p);
    	var m = document.createTextNode(match);
    	col2.appendChild(m);

    	row.appendChild(col1);
    	row.appendChild(col2);

    	tbl.appendChild(row);
	}
}

function testFun(){
	console.log("HELLO");
}


