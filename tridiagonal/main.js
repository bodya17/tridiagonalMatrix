//Some comment
'use strict';

var Fraction = require('fraction.js');

function createArray() {
    var arr = [];
    for (var i = 0; i < arguments.length; i++) {
        arr.push(new Fraction(arguments[i]));
    }
    return arr;
}

//48
// var a = createArray(0, -3, 5, -4, -2, -3, -3),
//     c = createArray(2, -10, -10, -10, -10, -12, -3),
//     b = createArray(2, -4, 2, -4, 2, 2, 0),
//     f = createArray(-12, -61, -3, -10, 28, -17, -12);

//49
var a = createArray(0, -3, 5, -4, -2, -3, 3),
    c = createArray(-2, -8, -8, -8, -8, -10, -3),
    b = createArray(2, -4, 2, -4, 2, 2, 0),
    f = createArray(12, 45, 7, 0, -4, -26, -3);

var denoms = [],
    denom = 0,
    α = [],
    β = [];
    

function tridiagonal(a, c, b, f, n) {
    
    α.push(b[0].div(c[0])); // α0
    β.push(f[0].div(c[0])); // β0
    console.log('a0 =' , α[0]);
    console.log('β0 =', β[0]);
    
    for (var i = 1; i < n; i++) {
        denom = c[i].sub(a[i].mul(α[i-1]));
        denoms.push(denom);
        α.push(b[i].div(denom));
        β.push((f[i].add(a[i].mul(β[i-1]))).div(denom));
        console.log('\nІтерація: %d', i);
        console.log('a%d =' , i, α[i]);
        console.log('β%d =', i, β[i]);
        console.log('знаменник =', denom);
    }

    // Зворотній хід
    var x = [];
    x[n-1] = β[n-1];
    
    for (var i = n-2; i >= 0; i--) {
        x[i] = α[i].mul(x[i+1]).add(β[i]);
    }
    console.log("\nРОЗВ'ЯЗОК:");
    x.forEach(function(value, index) {
    	console.log("x%d = ", index, value.s * value.n);
    })
}

tridiagonal(a, c, b, f, 7);
