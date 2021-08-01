/*
We will create a basic node that contains data and one link to another node. 
The node’s data will be specified when creating the node and immutable (can’t be updated). 
Remember that a node’s link to the next node is null when there are no nodes to traverse.

*/

class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  
    setNextNode(node) {
      if (node instanceof Node || node === null) {
        this.next = node;
      } else {
        throw new Error('Next node must be a member of the Node class.');
      }
    }

    getNextNode(node) {
        return this.next;
      }
  }
  
  const firstNode = new Node('I am an instance of a Node!');
  firstNode.setNextNode('This is a string, not a Node.');

  const firstNode = new Node('I am an instance of a Node!');
  const secondNode = new Node('I am the next Node!');
  
  firstNode.setNextNode(secondNode);
  console.log(firstNode);
  console.log(firstNode.getNextNode());
  
  module.exports = Node;
  