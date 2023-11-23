import {
  CommonModule,
  DatePipe,
  LowerCasePipe,
  UpperCasePipe
} from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { IPost } from "src/app/interfaces";
import { PostsService } from "src/app/services";

@Component({
  selector: "app-details",
  standalone: true,
  imports: [CommonModule, HttpClientModule, UpperCasePipe, DatePipe],
  providers: [PostsService],
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.css"],
  changeDetection: ChangeDetectionStrategy.Default
})
export class DetailsComponent {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private postsService = inject(PostsService);

  slug: string = "";
  post: IPost | null = null;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const slugParam = params.get("slug");
      if (slugParam) {
        this.slug = slugParam;
        this.loadData();
      }
    });
  }

  loadData() {
    this.postsService.findBySlug(this.slug).subscribe({
      next: post => {
        if (post) {
          this.post = post;
        } else {
          this.router.navigate(["/404"]);
        }
      }
    });
  }
}
