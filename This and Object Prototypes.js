//Chapter 1

function identify() {
    return this.name.toUpperCase();      // the parameter is an object reference "this" refers to that reference
}

function speak() {
    var greeting = "Hello, I'm " + identify.call( this );    // the parameter is an object reference "this" refers to that reference
    console.log( greeting);
}

var me = {
    name: "Josh"
};

var you = {
    name: "Reader"
};

identify.call(me);
identify.call(you);

speak.call(me);
speak.call(you);



//Chapter 2

function foo() {
    console.log(this.a);   //declaration of the fn foo
}
var obj = {              // instantiation of the object obj.
    a: 2,
    foo: foo
};

obj.foo();               // the fn foo is called with the obj object which console logs 2  ( this in fn foo = a in the object, which a=2).



//Chapter 3

var wantA = true;
var myObject = {     // instantiation of myObject
    a:2
};

var idx;               // definition of var idx

if (wantA) {
    idx="a";
}

console.log(myObject[idx]);    // this console.log defines the key value pair of a in the myObject.



//Chapter 4

