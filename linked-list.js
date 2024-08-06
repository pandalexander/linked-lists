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

  function size() {
    let count = 0;

    if (this.head === null) {
      return 0;
    } else {
      count = 1;
      let current = this.head;
      while (current.nextNode !== null) {
        current = current.nextNode;
        count++;
      }
    }

    return count;
  }

  function getHead() {
    return this.head;
  }

  function tail() {
    if (this.head !== null) {
      let current = this.head;
      while (current.nextNode !== null) {
        current = current.nextNode;
      }
      return current;
    } else {
      return this.head;
    }
  }

  return { head, append, prepend, size, getHead, tail };
}

function node(value = null, nextNode = null) {
  this.value = value;
  this.nextNode = nextNode;

  return { value, nextNode };
}

const defaultList = new linkedList();

console.log(defaultList.tail());

defaultList.append("buzz");

defaultList.prepend("fizz");

defaultList.prepend("first");

defaultList.append("last");

console.log(defaultList.tail());
