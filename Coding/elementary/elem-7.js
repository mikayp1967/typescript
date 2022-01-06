/*
Elementary challenge 7
https://adriann.github.io/programming_problems.html

Most of these challenges don't really translate as there seems to be no straightforward way to 
query STDIN. this is unlikely to really figure into my plans either so I'm going to bodge 
the following to work with various constants

REFERENCES:

I tried single backtick (`) to format the string, doesn't seem to work...
https://stackoverflow.com/questions/7790811/how-do-i-put-variables-inside-javascript-strings

*/

function multTable (tableNum) {
    // Print mukltiplication table for given number
    if (tableNum > 0 ) {
        print("Times tables for "+ tableNum + "\n");
        for (let i=1; i<= 12; i++) {
            print(i+"x" + tableNum + " = " + i*tableNum)
        }
    }
    print ("\n\n")
}

for (let num=1; num <=12; num++){
    multTable(num);
}

