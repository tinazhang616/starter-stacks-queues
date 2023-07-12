class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class Queue {
    constructor() {
      this.first = null;
      this.last = null;
    }
    enqueue(value) {
        const newNode = new Node(value);
    
        if (this.first) {
          this.last.next = newNode;
        } else {
          // Set the node of the queue's next pointer to be the new node
          this.first = newNode;
        }
    
        // Make the new node the last item on the queue
        this.last = newNode;
        }
  }