import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject
} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PostsComponent } from "src/app/components";
import { IPost } from "src/app/interfaces";
import { PostsService } from "src/app/services";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule, PostsComponent, HttpClientModule],
  providers: [PostsService],
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
  changeDetection: ChangeDetectionStrategy.Default
})
export class HomeComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private postsService = inject(PostsService);

  results: IPost[] = [];
  searchBy: string = "";

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const searchBy = params["searchBy"];
      this.searchBy = searchBy;
      console.log(this.searchBy);
      this.loadResults(searchBy);
    });
  }

  loadResults(searchBy?: string) {
    this.postsService.findAll(searchBy).subscribe(response => {
      this.results = [...response];
    });
  }
}
