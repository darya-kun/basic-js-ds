const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

module.exports = class BinarySearchTree {
  constructor() {
    this._root = null;
  }
  // return root node of the tree
  root() {
    return this._root;
  }

  // add node with data to the tree
  add(data) {
    let _add = function(root, data) {
      // если значения root нет
      if (!root) {
        return new Node(data);
        // если значение рута совпадает с пришедшим значением
      } else if (root.data === data) {
        return root;
      }
      
      if (data < root.data) {
        // рекурсия (матрешка) - с каждой итерацией меняем условия старта функции - назначение нового левого рута
        root.left = _add(root.left, data);
      } else {
        root.right = _add(root.right, data);
      }
      return root;
    }
    this._root = _add(this._root, data);
  }

  // returns true if node with the data exists in the tree and false otherwise
  has(data) {
    // '!!' - перевод в boolean, т.к. null = false. Альтернатива тернарному оператору
    return !!this.find(data);
  }

  // returns node with the data if node with the data exists in the tree and null otherwise
  find(data) {
    let _find = function(root, data) {
      if (!root) {
        return null;
      }

      if (data < root.data) {
        return _find(root.left, data);
      } else if (data > root.data) {
        return _find(root.right, data);
        // если равны
      } else {
        return root;
      }
    }

    return _find(this._root, data);
  }

  // removes node with the data from the tree if node with the data exists
  remove(data) {
  }

  // returns minimal value stored in the tree (or null if tree has no nodes)
  min() {
    if (!this._root) {
      return null;
    }

    let node = this._root;

    // самое маленькое число - самое крайнее слева
    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  // returns maximal value stored in the tree (or null if tree has no nodes)
  max() {
    if (!this._root) {
      return null;
    }

    let node = this._root;

    // самое большое число - самое крайнее справа
    while (node.right) {
      node = node.right;
    }

    return node.data;
  }

}