'use strict';
(function() {
    function getClosestToZero() {
        var min = arguments[0];
        var result;
        for (var i = 1; i < arguments.length; i++) {
            if (Math.abs(arguments[i]) < min) {
                min = Math.abs(arguments[i]);
                result = arguments[i];
            }
        }
        return result;
    }
    console.log(getClosestToZero(10, -2, 6, 7));
})();