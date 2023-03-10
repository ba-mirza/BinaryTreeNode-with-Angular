import { _Node } from "./_Node";
import { Node } from "./model";

export class BinaryTreeNode {
  root: Node | null;
  constructor() {
    this.root = null;
  }

  push(value: number) {
    const node = new _Node(value);
    if (!this.root) {
      this.root = node;
      return this;
    }

    let current = this.root;

    if (value === current.value) {
      return this;
    }

    while (true) {
      if (value > current.value) {
        if (!current.right) {
          current.right = node;
          return this;
        }
        current = current.right;
      }

      if (value < current.value) {
        if (!current.left) {
          current.left = node;
          return this;
        }
        current = current.left;
      }
    }
  }
}
