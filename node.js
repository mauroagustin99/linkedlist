export class Node {
  constructor(value) {
    this.value = value;
    this.nextValue = null;
  }

  getValue() {
    return this.value;
  }

  setNext(node) {
    this.nextValue = node;
  }
}
