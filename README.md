# Linked List Practice

This repository contains a JavaScript implementation of a linked list data structure. The purpose of this project is to practice building and manipulating linked lists.

## Features

The `linkedList` function creates a linked list with the following methods:

- `append(value)`: Adds a new node with the given value to the end of the list.
- `prepend(value)`: Adds a new node with the given value to the beginning of the list.
- `size()`: Returns the number of nodes in the list.
- `getHead()`: Returns the first node in the list.
- `tail()`: Returns the last node in the list.
- `at(index)`: Returns the node at the specified index.
- `pop()`: Removes the last element from the list.
- `contains(value)`: Returns true if the value is in the list, false otherwise.
- `find(value)`: Returns the index of the node containing the value, or null if not found.
- `toString()`: Returns a string representation of the list.

## Usage

```javascript
const myList = new linkedList();

myList.append("dog");
myList.append("cat");
myList.prepend("bird");

console.log(myList.toString()); // Output: ( bird ) -> ( dog ) -> ( cat ) -> null
console.log(myList.size()); // Output: 3
console.log(myList.contains("cat")); // Output: true
console.log(myList.find("dog")); // Output: 1
```

## Node Structure

The `node` function creates individual nodes for the linked list, each containing a value and a reference to the next node.

## Example

The repository includes an example usage:

```javascript
const defaultList = new linkedList();
defaultList.append("dog");
defaultList.append("cat");
defaultList.append("parrot");
defaultList.append("hamster");
defaultList.append("snake");
defaultList.append("turtle");
console.log(defaultList.toString());
// Output: ( dog ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> ( turtle ) -> null
