import { Component, inject } from "@angular/core";
import { HeaderComponent } from "./components";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "dio-angular-blog";
  private router = inject(Router);

  searchPosts(searchBy: string) {
    this.router.navigate([""], { queryParams: { searchBy } });
  }
}
