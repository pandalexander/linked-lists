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

  return { head, append, prepend, size };
}

function node(value = null, nextNode = null) {
  this.value = value;
  this.nextNode = nextNode;

  return { value, nextNode };
}

const defaultList = new linkedList();

console.log(defaultList);

console.log("");

console.log(defaultList.size());

defaultList.append("buzz");

defaultList.prepend("fizz");

console.log(defaultList.size());

defaultList.prepend("first");

defaultList.append("last");

console.log("");

console.log(defaultList);

console.log("");

console.log(defaultList.size());
