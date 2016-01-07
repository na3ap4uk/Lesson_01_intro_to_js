/*
BONUS, means this task is not obligatory.
guessingGame - rewrite guess a number game 
(https://goo.gl/3FqoBd) using functions.
The main idea is to refactor your previous code so it become reusable 
and more readable.
*/

'use strict';

(function(){

	function(){

var i = Math.ceil(Math.random()*100).toString();

var a = prompt('Try to gues the number of monkeys!');



if ( i > a ) {

		a = prompt('Our number is higher, try again'); 

    } else ( i < a ) {

		a = prompt('Our number is lower, try again');

	}


/*
while (i!==a){    
    if(i>a){
		a = prompt('Our number is higher, try again');   
    } else if(i<a){
		a = prompt('Our number is lower, try again');
	}
}
*/


}

console.log('You are right, the number is ' + a);

})();