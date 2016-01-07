/*
(function() {
	//---------------------------
    var personname = 'Nazar';
    var time = '06:00';
    var place = 'Lviv';
    var event = prompt('When Nazar will arrive?');
    var sentense = personname + ' arrives to ' + place + ' at ' + time;
    console.log(sentense);
    //---------------------------
})();
(function() {
	//---------------------------
    var x1 = 5;
    var y1 = 15;
    var x2 = prompt('Enter x2:');
    var y2 = prompt('Enter y2:');
    var result = Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
    alert(result);
    //---------------------------
})();
(function() {
	//---------------------------
    var output = '';
    for (var i = 0; i < 9; i++) {
        output = output + '#';
        console.log(output);
    }
    //---------------------------
})();
(function() {
	//---------------------------
    var i = 0;
    while (i < 8) {
        if (i % 2 === 0) {
            console.log("# # # #");
        } else {
            console.log(" # # # #");
        }
        i++;
    }
    //---------------------------
})();
(function() {
	//---------------------------
    var i = Math.ceil(Math.random() * 100).toString();
    var a = prompt('Try to gues the number of monkeys!');
    while (i !== a) {
        if (i > a) {
            a = prompt('Our number is higher, try again');
        } else if (i < a) {
            a = prompt('Our number is lower, try again');
        }
    }
    console.log('You are right, the number is ' + a);
    //---------------------------
})();
*/