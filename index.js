/**
 * Represents a Deque, a double ended linked queue.
 * All functions below should run in O(1) time.
 */
var Deque = module.exports = function Deque() {
  this.head = null;
  this.tail = null;
};

/**
 * Pushes an element onto the beginning of the deque.
 */
Deque.prototype.push = function(x) {
  var node = this.head = {
    val: x,
    prev: null,
    next: this.head
  };
  if (node.next) node.next.prev = node;
  return node;
};

/**
 * Pops an element from the end of the deque.
 */
Deque.prototype.pop = function() {
  var val = this.head.val;
  this.head = this.head.next;
  this.head.prev = null;
  return val;
};

/**
 * Injects an element onto the end of the deque.
 */
Deque.prototype.inject = function(x) {
  var node = this.tail = {
    val: x,
    prev: this.tail,
    next: null
  };
  if (node.prev) node.prev.next = node;
  return node;
};

/**
 * Ejects an element from the end of the deque.
 */
Deque.prototype.eject = function() {
  var val = this.tail.val;
  this.tail = this.tail.prev;
  this.tail.next = null;
  return val;
};
