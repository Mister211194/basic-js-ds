const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this._root = null;
  }

  root() {
    return this._root;
  }

  add(data) {
    this._root = addElement(this._root, data);
    function addElement(node, data) {
      if (!node) return new Node(data);
      if (node.data === data) return node;
      if (data < node.data) {
        node.left = addElement(node.left, data);
      } else {
        node.right = addElement(node.right, data);
      }
      return node;
    }
  }

  has(data) {
    function searchElement(node, data) {
      if (!node) return false;
      if (node.data === data) return true;
      return data < node.data
        ? searchElement(node.left, data)
        : searchElement(node.right, data);
    }
    return searchElement(this._root, data);
  }

  find(data) {
    function searchNode(node, data) {
      if (!node) {
        return null;
      }
      if (node.data === data) {
        return node;
      }
      return data < node.data
        ? searchNode(node.left, data)
        : searchNode(node.right, data);
    }
    return searchNode(this._root, data);
  }


  remove(data) {
    function removeElement(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeElement(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeElement(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) return null;
        if (!node.left) return node = node.right;
        if (!node.right) return node = node.left;

        let maxFromLeft = node.left;
        while (maxFromLeft.right) {
          maxFromLeft = maxFromLeft.right;
        }
        node.data = maxFromLeft.data;
        node.left = removeElement(node.left, maxFromLeft.data);

        return node;
      }
    }

    this._root = removeElement(this._root, data);
  }

  min() {
    if (!this._root) {
      return null;
    }

    this._minNode = this._root;
    while (this._minNode.left) {
      this._minNode = this._minNode.left;
    }

    return this._minNode.data;
  }

  max() {
    if (!this._root) {
      return null;
    }

    this._maxNode = this._root;
    while (this._maxNode.right) {
      this._maxNode = this._maxNode.right;
    }

    return this._maxNode.data;
  }
}

module.exports = {
  BinarySearchTree
};