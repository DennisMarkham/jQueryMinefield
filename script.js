//so how am I going to pull this off

//let's start simple:
//9 tiles
//1 is the treasure tile
//4 are mine tiles

//so maybe we start with nine buttons, each with an id "button1, button2, etc."
//then we pick a randomm number 1 through 9, and use that to add a "treasure 'class'"

//okay, now somehow we need a system by which it can randomly assign a mine-class 4 times without
//using it to those already assigned a class

//it would also be nice to have an algorithim for generating the buttons, so I could generate a crap-ton of
//them.

//$("document").ready(function(){

for (let row = 0; row < 5; row++) {
		for (let col = 0; col < 5; col++) {
	  $("#tileDiv").append("<button id ='" + String(row) + String(col) + "'><span class = 'tileText'>0</span></button>")
	}
  $("#tileDiv").append("<br/>");
}

var row = Math.floor(Math.random() * 5);
var col = Math.floor(Math.random() * 5);

var treasureTile = String(row) + String(col);

console.log(treasureTile)
$("#" + treasureTile).on("click", function(){
alert("treasure found!")
})
//creates an array of used tiles, so there's no repitition
var used = [treasureTile];

//this stuff doesn't work
function createMine(used)
{
	var newMine = String(Math.floor(Math.random() * 5)) + String(Math.floor(Math.random() * 5));

	//this checks to see if the coordinates are already in the used Array
	for (let i = 0; row < used.length; i++) {
		if(used[i] == newMine)
		{
		createMine(used)		
		}

		$("#" + newMine).on("click", function(){
			alert("boom")
		})

		return newMine
}

}

used.push(createMine(used));

used.push(createMine(used));

used.push(createMine(used));

used.push(createMine(used));

used.push(createMine(used));

used.push(createMine(used));





//})

