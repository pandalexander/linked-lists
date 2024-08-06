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

  function at(index) {
    if (this.head === null || index === 0) {
      return this.head;
    } else if (index < 0 || typeof index !== "number") {
      return "Please enter a number at or above 0.";
    } else {
      let current = this.head;
      for (let i = 0; i < index; i++) {
        if (current.nextNode === null) {
          return "Index exceeds size of list. Please try again!";
        } else {
          current = current.nextNode;
        }
      }
      return current;
    }
  }

  function pop() {
    if (this.head === null || this.head.nextNode === null) {
      this.head = null;
      return;
    } else {
      let current = this.head;
      while (current.nextNode !== null) {
        if (current.nextNode.nextNode === null) {
          current.nextNode = null;
          return;
        } else {
          current = current.nextNode;
        }
      }
    }
  }

  function contains(value) {
    // if value is in linked list, return true
    // else, return false

    if (this.head === null) {
      return false;
    } else {
      let current = this.head;
      if (current.value === value) {
        return true;
      }
      while (current.nextNode !== null) {
        current = current.nextNode;
        if (current.value === value) {
          return true;
        }
      }
    }
    return false;
  }

  function find(value) {
    if (this.head === null) {
      return null;
    } else {
      let index = 0;
      let current = this.head;
      if (this.head.value === value) {
        return index;
      }
      while (current.nextNode !== null) {
        current = current.nextNode;
        index++;
        if (current.value === value) {
          return index;
        }
      }
    }
    return null;
  }

  return {
    head,
    append,
    prepend,
    size,
    getHead,
    tail,
    at,
    pop,
    contains,
    find,
  };
}

function node(value = null, nextNode = null) {
  this.value = value;
  this.nextNode = nextNode;

  return { value, nextNode };
}

const defaultList = new linkedList();

defaultList.append("Mike");
defaultList.append("Chris");
defaultList.append("Alex");

console.log(defaultList.find("Mike"));

console.log(defaultList.find("Pete"));
