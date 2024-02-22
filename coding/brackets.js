// JS program to check valid Brackets braces and parenthesis in a string 

// You can use a stack data structure to check for valid brackets, braces, and parentheses in a string. 
// This program iterates through each character in the string, pushing opening brackets onto the stack and popping matching opening brackets when encountering closing brackets. If the stack is empty at the end, it means all brackets were properly matched, returning true; otherwise, it returns false.

function isValid(str) {
    const stack = [];
    const openingBrackets = ['(', '[', '{'];
    const closingBrackets = [')', ']', '}'];
    const bracketPairs = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    for (let char of str) {
        if (openingBrackets.includes(char)) {
            stack.push(char);
        } else if (closingBrackets.includes(char)) {
            if (stack.length === 0 || stack.pop() !== bracketPairs[char]) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

// Example usage:
console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
console.log(isValid("([)]")); // false
console.log(isValid("{[]}")); // true

// Explaination:-
// stack: This array acts as a stack data structure to store opening brackets encountered.
// openingBrackets: An array containing all opening bracket characters.
// closingBrackets: An array containing all closing bracket characters.
// bracketPairs: An object mapping each closing bracket to its corresponding opening bracket.
// Iteration through the String

// Checking for Opening Brackets:
// if (openingBrackets.includes(char)) {
//     stack.push(char);
// }
// If the current character is an opening bracket, it is pushed onto the stack.

// Checking for Closing Brackets:
// else if (closingBrackets.includes(char)) {
//     if (stack.length === 0 || stack.pop() !== bracketPairs[char]) {
//         return false;
//     }
// }
// If the current character is a closing bracket, it checks if the stack is empty or if the popped element from the stack doesn't match the expected opening bracket for the current closing bracket. If either condition is true, it returns false, indicating invalid brackets.

// return stack.length === 0;
// Finally, it checks if the stack is empty. If it's empty, all opening brackets have been properly matched with closing brackets, so it returns true; otherwise, it returns false.