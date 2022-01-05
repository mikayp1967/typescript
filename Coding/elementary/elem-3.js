/*
Elementary challenge 3
https://adriann.github.io/programming_problems.html

Most of these challenges don't really translate as there seems to be no straightforward way to 
query STDIN. this is unlikely to really figure into my plans either so I'm going to bodge 
the following to work with various constants

REFERENCES:

https://www.w3schools.com/js/js_if_else.asp
https://stackoverflow.com/questions/2363840/how-to-use-or-condition-in-a-javascript-if-statement

*/

function sayHello (userName) {
    if (userName == "Bob" || userName == "Alice") {
        print("Hello " + userName);
    }
}

sayHello ("Steve");
sayHello ("Alice");
sayHello ("Todd");
sayHello ("Bob");


