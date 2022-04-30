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
 */
class Queue {

  constructor() {
    this._head = null;
    this._linkEndList = null;
  }

  getUnderlyingList() {
    return this._head;
  }

  enqueue(value) {
    this._node = new ListNode(value);
    if (!this._head) {
      this._head = this._node;
      this._linkEndList = this._node;
    } else {
      this._linkEndList.next = this._node;
      this._linkEndList = this._node;
      return this;
    }
  }

  dequeue() {
    if (!this._head) return null;
    this._firstHead = this._head;
    this._head = this._head.next;
    return this._firstHead.value;
  }
}

module.exports = {
  Queue
};
