//  a() => 5
function a() {
  return 5;
}

// b(1,15) => 16
function b(r, t) {
   return r + t;
}
// c(2,2) => 4
function mathPow(u, o) {
  return Math.pow(u, o);

}
// d(1) => {a:1}
function d(z) {
  obj = { a: z };
    return obj;
}

// e(55)() => 55
function e(g) {
  return function () {
    return g;
    }
}

// f(1,3) => [1,1,1]
function f(m, x) {
  var dev = [];
    for (var i = 0; i < x; i++) {
      dev.push(m);
    }
    return dev;
}

// g() => 99
function g(too) {
  if (too) {
    return too;
    }
    else {
    return 99;
    }
}

// h(function(){return 5}) => 5
(function h(f)
    return f();
}

// function j([1,2,3]) => 6
function j(arr) {
   var sum = 0;
     for (var i = 0; i < arr.length; i++){
      sum += arr[i];
    }
    return sum;
}

// k({a:1,b:2,c:3}) => 6
function k(obj) {
  var sum = 0;
    for (var key in obj){
      sum += obj[key];
    }
    return sum;
}

// m([1,2,3],[55,12,33]) => [56,14,36]
function m(tr, gr2) {
  var resAr = [];
    for (var i = 0; i < tr1.length; i++){
       resArr[i] = tr1[i] + gr2[i];
    }
    return resAr;
}

// n(1)(2)(3) => 6
function n(a) {
  return function (s) {
    return function (d) {
      return a + s + d;
        }
    }
}