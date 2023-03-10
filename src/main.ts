import "zone.js/dist/zone";
import { Component, HostListener } from "@angular/core";
import { CommonModule } from "@angular/common";
import { bootstrapApplication } from "@angular/platform-browser";
import { BinaryTreeNode } from "./BinaryTreeNode";

@Component({
  selector: "my-app",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./my-app.html",
})
export class App {
  name = "Binary Tree Node";

  public root = new BinaryTreeNode();

  public get template(): any {
    return this.root;
  }

  private set template(value: number) {
    this.root.push(value);
  }

  public newRandNum(): void {
    const value = Math.floor(Math.random() * 201) - 100;
    this.template = value;
  }
}

bootstrapApplication(App);
