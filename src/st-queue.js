const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 * 
 * *FIFO is a method for handling data structures where the first element is processed first and the newest element is processed last.
 */


module.exports = class Queue {
  // начальная нода является head и tale одновременно
  constructor(value) {
    this.head = null;
    this.tale = null;
    this.length = 0;
  }

  // returns underlying (базовый) linked list
  getUnderlyingList() {
    return this.head;
  }

  // puts the value at the end of the queue
  enqueue(value) {
    const node = new ListNode(value);

    if (!this.head) {
      this.head = node;
    } else if (!this.tale) {
      this.tale = node;
      this.head.next = node;
    } else {
      this.tale.next = node;
      this.tale = node;
    }
  }

  // retrieves (извлекает) a value from the head of the queue and deletes it
  dequeue() {
    const current = this.head;
    this.head = this.head.next;
    return current.value;
  }
}
