const { NotImplementedError } = require('../extensions/index.js');

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
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

module.exports = function removeKFromList(list, number) {
  // Текущая нода списка
  let current = list;

  // Ищем пока список не закончится, т.е. его последняя нода не будет ссыылаться на null
  while (current.next !== null) {
    // Если значение текущей ноды равно искомому числу
    if (current.value === number) {
      // Переносим значение текущей ноды на следующую
      current.value = current.next.value;
      // Переносим следующую ноду за текущей на через одну 
      current.next = current.next.next;
    } else {
      // Переходим к следующей ноде
      current = current.next;
    }
  }
  return list;
}


// // if l was an array solution
// let removeKFromList = function(l, k) {
//   let value = k;
//   let arr = l;
//   return  arr = arr.filter(item => item !== value);
// }
// console.log(removeKFromList([3, 1, 2, 3, 4, 5], 3));