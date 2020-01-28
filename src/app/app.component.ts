import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Platzi-store";
  items = ["Marco", "Jose", "Cesar"];
  addItem() {
    this.items.push("Nuevo Item");
  }
  deleteItem(index: number) {
    this.items.splice(index, 1);
  }
}
