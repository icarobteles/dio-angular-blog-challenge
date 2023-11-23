import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DetailsComponent, HomeComponent, NotFoundComponent } from "./pages";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    loadComponent: () => HomeComponent
  },
  {
    path: "posts/:slug",
    loadComponent: () => DetailsComponent
  },
  {
    path: "**",
    loadComponent: () => NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
