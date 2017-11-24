/*jshint esversion: 6 */

function List() {
    return new EmptyList();
}

function EmptyList() {
}

EmptyList.prototype = new List();
EmptyList.prototype.constructor = EmptyList;

EmptyList.prototype.toString = function() {
  let str = "(";
  if (!this.head) {
    return "()";
  }
  let curr = this.head;
  while (curr.next) {
    str += curr.value;
    curr = curr.next;
  }
  return str + ")";
};

EmptyList.prototype.isEmpty = function() {
  if (this.next) {
    return false;
  }
};
EmptyList.prototype.length = function() {
  let curr = this.head;
  if (!counter) {
    let counter = 0;
  }
  while (curr.next) {
    counter += 1;
    curr = curr.next;
  }
  return counter;
};
EmptyList.prototype.push = function(x) {
    let thisList = this;
    let newList = new List();
    let listNode = new ListNode(x, thisList);
    newList.head = listNode;
    if(thisList.head) {
        let curr = thisList.head;
        let curr2 = newList.head;
        while (curr.next) {
            newList.next = curr;
            // newList.next.value = curr.value;
            curr = curr.next;
            if (curr2.next) {
                curr2 = curr2.next;
            }
        }
    }
    return newList;
};
EmptyList.prototype.remove = function(x) {
  let newList = new List();
  while (this.next) {
    if (this.next.value == x) {
      this.next = this.next.next;
    } else {
      listNode = new ListNode(this.value, this.next);
      this.next = this.next.next;
    }
  }
  return newList;
};
EmptyList.prototype.append = function(xs) {
  let curr1 = this.head;
  let curr2 = xs.head;
  let newList = new EmptyList();
  while (curr1.next) {
    newList.push(curr1.value);
    curr1 = curr1.next;
  }
  while (curr2.next) {
    newList.push(curr2.value);
    curr2 = curr2.next;
  }
  return newList;
};

function ListNode(value, next) {
  this.value = value;
  this.next = next;
}
ListNode.prototype = new EmptyList();
ListNode.prototype.constructor = ListNode;
ListNode.prototype.isEmpty = function() {
  if (!this.next && !this.value) {
    return true;
  }
};

ListNode.prototype.toString = function() {
  /* implement this */
};
ListNode.prototype.head = function() {
  if (!this.isEmpty()) {
    return this.head;
  }
};
ListNode.prototype.tail = function() {
  let newList = new EmptyList();
  let curr = this.head.next;
  while (curr.next) {
    newList.push(curr.value);
  }
  return newList;
};
ListNode.prototype.length = function() {
  /* implement this */
};
ListNode.prototype.push = function(x) {
  /* implement this */
};
ListNode.prototype.remove = function(x) {
  /* implement this */
};
ListNode.prototype.append = function(xs) {
  /* implement this */
};

var list0 = new EmptyList();        // => "()"
var list1 = list0.push(3);          // => "(3)"
list1.push(5);
var list2 = list1.push(2);          // => "(2 3)"
var list3 = list2.push(1);          // => "(1 2 3)"
var list13 = list1.append(list3);   // => "(3 1 2 3)"

list13.head();   // => 3
list13.tail();  // => list3