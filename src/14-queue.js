// const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */
const ListNode = require('../extensions/list-node');

class Queue {
  constructor () {
    this.head = null;
    this.length = 0;
  }

  get size() {
    return this.length;
  }

  createNode(data) {
    const node = ListNode(data);
    return node;
  }

  enqueue(element) {
    const node = this.createNode(element);
    if (this.length === 0) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = this.createNode(element);
    }
    this.length++;
  }

  dequeue() {
    const toDelete = this.head;
    this.head = this.head.next;
    this.length--;
    return toDelete.value;
  }
}

module.exports = Queue;
