# Javascript Cheatsheet

## Language Guides

    https://www.w3schools.com/js/js_functions.asp


## If/Bool conditions

    https://stackoverflow.com/questions/2363840/how-to-use-or-condition-in-a-javascript-if-statement

    isPrime=true/false;                             Assign true/false
    if (isPrime) .......                            Test a bool condition
    if (isPrime || anotherBool) ....                Condition 1 or condition2
    if (isPrime && (9 > 7)) ....                    Condition 1 & Condition 2

## Sort compare function

    https://stackoverflow.com/questions/6567941/how-does-sort-function-work-in-javascript-along-with-compare-function

    By default, the array sort() method sorts alphabetically ascending. If you want to sort in some other order, because your array contains numbers or objects then you can pass a function in to the sort().

    The function you pass in takes two parameters, often called a and b, and returns: a negative number if the first argument should be sorted before the second (a < b) 0 if the arguments are equal (a==b) a positive number if the first argument should be sorted after the second (a > b)

    Now, here is the key bit: the function you pass as a parameter to sort() will be called repeatedly by sort() as it processes the whole array. sort() doesn't know or care about the datatype of the things in the array: each time it needs to know "Does item A come before item B?" it just calls your function. You don't need to worry about what type of sort algorithm is used internally by sort(), indeed one browser might use a different algorithm to another, but that's OK because you just have to provide a way for it to compare any two items from your array.

    Your function could have an if / else if / else structure to decide what result to return, but for numbers simply returning (a-b) will achieve this for you because the result of the subtraction will be -ve, 0 or +ve and correctly put the numbers in ascending order. Returning (b-a) would put them descending:


