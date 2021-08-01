const Node = require('./Node');

/*
A linked list is a linear data structure where elements are not stored at contiguous location. Instead the elements are linked using pointers.

In a linked list data is stored in nodes and each node is linked to the next and, optionally, to the previous.

*/

class LinkedList {
  constructor() {
    this.head = null;
  }

  addToHead(data) {
    const newHead = new Node(data);
    const currentHead = this.head;
    this.head = newHead;
    if (currentHead) {
      this.head.setNextNode(currentHead);
    }
  }

  addToTail(data) {
    let tail = this.head;
    if (!tail) {
      this.head = new Node(data);
    } else {
      while (tail.getNextNode() !== null) {
        tail = tail.getNextNode();
      }
      tail.setNextNode(new Node(data));
    }
  }

  removeHead() {
    const removedHead = this.head;
    if (!removedHead) {
      return;
    }
    this.head = removedHead.getNextNode();
    return removedHead.data;
  }

  printList() {
    let currentNode = this.head;
    let output = '<head> ';
    while (currentNode !== null) {
      output += currentNode.data + ' ';
      currentNode = currentNode.getNextNode();
    }
    output += '<tail>';
    console.log(output);
  }

  // additional methonds
  removeTail() {
    if (this.head === null) {
      return null;
    }

    let currentNode = this.head;
    let prevNode = this.head;
    while (currentNode.getNextNode() !== null) {
      prevNode = currentNode;
      currentNode = currentNode.getNextNode();
    }
    this.tail = prevNode;
    prevNode.setNextNode(null);
  }


  traverseNode(data) {
    if (this.head === null) {
      return null;
    }

    let currentNode = this.head;
    let prevNode = this.head;
    while (currentNode !== null && currentNode.data !== data) {
      prevNode = currentNode;
      currentNode = currentNode.getNextNode();
    }

    if (currentNode === null) {
      return null;
    }

    return {
      prevNode,
      currentNode,
    };
  }

  checkIfNodeExists(data) {
    return this.traverseNode(data) !== null ? true : false;
  }

  insertNode(prevNodeData, data) {
    if (this.head === null) {
      addToHead(data);
      return;
    }
    const newNode = new Node(data);
    // if we do .prevNode then we get node before
    // previous node we want to insert after
    if (this.checkIfNodeExists(prevNodeData)) {
      let prevNode = this.traverseNode(prevNodeData).currentNode;
      let nextNode = prevNode.getNextNode();
      // prev -> newNode -> nextNode
      prevNode.setNextNode(newNode);
      newNode.setNextNode(nextNode);
    } else {
      throw new Error('Node not found');
    }
  }

  removeNode(data) {
    if (this.head.data === data) {
      this.removeHead();
      return;
    }

    if (this.tail.data === data) {
      this.removeTail();
      return;
    }

    let prevNode = this.traverseNode(data).prevNode;
    let currentNode = this.traverseNode(data).currentNode;
    let removedNode = currentNode;
    prevNode.setNextNode(currentNode.getNextNode());

    return removedNode;
  }

}

module.exports = LinkedList;