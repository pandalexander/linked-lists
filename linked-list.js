function linkedList(head = null) {
  this.head = head;

  function append(value) {
    let newNode = new node(value);
    if (this.head === null) {
      this.head = newNode;
      return;
    }

    let current = this.head;

    if (current.nextNode === null) {
      current.nextNode = newNode;
    } else {
      while (current.nextNode !== null) {
        current = current.nextNode;
      }
      current.nextNode = newNode;
    }
  }

  function prepend(value) {
    let newNode = new node(value);
    newNode.nextNode = this.head;
    this.head = newNode;
  }

  return { head, append, prepend };
}

function node(value = null, nextNode = null) {
  this.value = value;
  this.nextNode = nextNode;

  return { value, nextNode };
}

const defaultList = new linkedList();
