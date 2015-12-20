'use strict!';

(function(){
var i = Math.ceil(Math.random()*100).toString();
var a = prompt('Try to gues the number of monkeys!');
while (i!==a){    
    if(i>a){
		a = prompt('Our number is higher, try again');   
    } else if(i<a){
		a = prompt('Our number is lower, try again');
	}
}
console.log('You are right, the number is ' + a);
})();