import { Node } from "./model";

export class _Node implements Node {
  value: number;
  right: Node | null;
  left: Node | null;

  constructor(value: number) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}
