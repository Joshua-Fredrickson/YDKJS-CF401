// Chapter 1 Quiz

function foo(a) {
    var b = a;    //the scope of b is in the fn foo block
    return a + b;
}
var c = foo(2);    //var c is globally scoped


//Chapter 2

function foo(a) {
    var b = a * 2;        // var b is nested inside the scope of fn foo
    function bar(c) {       // fn bar is nested inside the scope of fn foo and has access to var a & b along with it's
        console.log( a, b, c);    //own parameter of c.
    }
    bar(b * 3);            //execution of fn bar.
}

foo(2);  //this will output 2,4,& 12 in this example


//Chapter 3
//COLLISION AVOIDANCE

function foo() {
    function bar(a) {
        i=3;                      // i is overwritten and assigned in fn bar
        console.log(a + i);
    }

    for (var i=0; i<10; i++) {      // i is still overwritten to 3 and overrides this for loop, thus becoming an
        bar (i * 2);                // infinite loop
    }
}

foo();


//Chapter 4

function foo() {
    var a;              // declaration of a variable named a that as no values associated with it.
    console.log (a);    // this will be undefined as the variable does not have a value associated with it at runtime.
    a = 2;              // here is where the variable is finally defined.
}

foo();


//Chapter 5

function foo() {
    var a = 2;
    function bar() {             //bar has the lexical scope to access the inner scope of foo!
        console.log(a);
    }
    return bar;
}

var baz = foo();                 //baz assigns foo as a global variable that can be instantiated elsewhere.

baz();



//IIFE FUNCTIONS
//
// var a = 2;
//
// (function IIFE(def){
//     def(window);
// })(function def(global){
//     var a = 3;
//     console.log (a);
//     console.log (global.a);
// })


// TRY/ CATCH

// try {
//     undefinded();
// }
// catch (err) {
//     console.log(err);
// }
//
// console.log(err);