const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(list, key) {
  this._list = list;
  if (this._list.value === key) {
    this._list.value = this._list.next.value;
    this._list.next = this._list.next.next;
  }

  while (this._list.next) {
    this._list.next.value === key
      ? this._list.next = this._list.next.next
      : this._list = this._list.next;
  }
  return list;
}

module.exports = {
  removeKFromList
};
