4+3;

if(4+3 === 7){
	console.log("HELLLOOOO");
}

console.log("HELLLOOOO");
console.log("HELLLOOOO");

//declaring function the normal way
function sayHello(){
	console.log("Hello");
}

sayHello();

//function expression, annomous function
var sayBye = function(){
	console.log("Bye");
}

sayBye();

function sing(){
	console.log("AHHH");
	console.log("teeeeee");
}

sing();

function sing2(){
	console.log("MOOOO");
}

sing2();

//argument in function
function sing3(song){
	console.log(song);
	console.log("teeeeee");

sing("KAPPPAPAPAPAA");

//arrays
var list = ["tiger", "cat", "bear", "bird"];
console.log(list[1]);

var numbers = [1,2,3,4};

var booleans = [true, false, true];

var functionList = [function apple(){console.log(apple)}]

var mixedList = ["apples", 3, undefined, true]

// can do array inside another array

//Objects
var user = {
	name: "John",
	age: 23,
	hobby: "soccer"
	shout: function(){
		console.log("dsgajhdbsajhdb");
	}
};
//user.age to get 
//user.food = "spingch"; to concat
//change by user.isMarried = true;
// objects can contain arrays and arrays can contain lists
//grab by list[1].password
var list = [
	{
		username:"kjdsa",
		password:"dsad"
	},
	{
		username:"kjdsa",
		password:"dsad"
	}
]