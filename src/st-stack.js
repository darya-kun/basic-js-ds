const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 * 
 * * LIFO is a method where the first element is processed last and the last element is processed first.
 */
 module.exports = class Stack {
  constructor() {
    this.stack = [];
  }

  // adds the element to the stack
  push(element) {
    this.stack.push(element);
  }

  // returns the top element from stack and deletes it, returns 1
  pop() {
    return this.stack.pop();
  }

  // returns the peek, but doesn't delete it, returns 1
  peek() {
    return this.stack[this.stack.length - 1];
  }
}
