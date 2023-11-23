import { CommonModule, DatePipe, UpperCasePipe } from "@angular/common";
import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { RouterModule } from "@angular/router";
import { IPost } from "src/app/interfaces";

@Component({
  selector: "app-posts",
  standalone: true,
  imports: [CommonModule, RouterModule, UpperCasePipe, DatePipe],
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostsComponent {
  @Input() posts!: IPost[];
  @Input() searchBy!: string;
}
