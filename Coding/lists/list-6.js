/*
Lists/Strings challenge 5

https://adriann.github.io/programming_problems.html

Most of these challenges don't really translate as there seems to be no straightforward way to 
query STDIN. this is unlikely to really figure into my plans either so I'm going to bodge 
the following to work with various constants

REFERENCES:

https://www.geeksforgeeks.org/reverse-a-string-in-javascript/
https://www.thoughtco.com/what-is-a-palindrome-1691560

*/

/*
I add 5 elements a a time to a list and check if the number 55 occurs
if it does I exit, otherwise I repeat til the length of the array is >=40

*/

// I stole this - bad me!
function ReverseString(str) {
    return str.split('').reverse().join('')
 }


function testPalindrome(testStr) {
    newStr= testStr.replace(/[ ,:.!\-']/g, "");
    newStr=newStr.toUpperCase();
    revStr=ReverseString(newStr);
    if (newStr == revStr) {
        print("YAY " + testStr + " IS a palindrome!\n");
    } else {
        print("SORRY " + testStr + " isn't a palindrome.");
        print( newStr + " ===> " + revStr + "\n");
    }
}
    
 
testPalindrome("The cat sat on the mat");
testPalindrome("Madam I'm Adam");
testPalindrome("A man, a plan, a canal--Panama!");
testPalindrome("Lewd did I live & evil I did dwel.")
testPalindrome("I like cheesy biscuits!");
