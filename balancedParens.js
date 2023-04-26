// Sample Strings
let sample1 = "This ( is unbalanced."
let sample2 = "(This (is (a) balanced) string.)"
let sample3 = "This is () also ) unbalanced."
let sample4 = "Balanced."

// Write your solution below:
function balancedParentheses(str) {
    // Create a stack to store the opening parentheses.
    const stack = []
  
    // Iterate over the characters in the string.
    for (let i = 0; i < str.length; i++) {
      // If the current character is an opening parenthesis, push it onto the stack.
      if (str[i] === '(') {
        stack.push(str[i])
      } else if (str[i] === ')') {
        // If the current character is a closing parenthesis, pop the top element off the stack.
        if (stack.length === 0) {
          // If the stack is empty, there are more closing parentheses than opening parentheses.
          return false
        }
        const top = stack.pop()
        if (top !== '(') {
          // If the top element of the stack is not an opening parenthesis, the parentheses are not balanced.
          return false
        }
      }
    }
  
    // If the stack is empty, the parentheses are balanced.
    return stack.length === 0
  }
  
  console.log(balancedParentheses(sample1)) // false
  console.log(balancedParentheses(sample2)) // true
  console.log(balancedParentheses(sample3)) // false
  console.log(balancedParentheses(sample4)) // true