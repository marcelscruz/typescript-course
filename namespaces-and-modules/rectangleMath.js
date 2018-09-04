"use strict";
var MyMath;
(function (MyMath) {
    function calcRectangle(width, lenght) {
        return width * lenght;
    }
    MyMath.calcRectangle = calcRectangle;
})(MyMath || (MyMath = {}));
