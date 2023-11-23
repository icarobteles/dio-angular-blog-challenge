import { AsyncPipe, CommonModule } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
  inject
} from "@angular/core";
import { Router, RouterModule } from "@angular/router";
import { interval, takeWhile } from "rxjs";

@Component({
  selector: "app-not-found",
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: "./not-found.component.html",
  styleUrls: ["./not-found.component.css"],
  changeDetection: ChangeDetectionStrategy.Default
})
export class NotFoundComponent implements OnInit, OnDestroy {
  private isAlive: boolean = true;
  counter: number = 5;
  time = interval(1000);

  private router = inject(Router);

  ngOnInit(): void {
    this.startTimer();
  }

  ngOnDestroy(): void {
    this.isAlive = false;
  }

  startTimer() {
    const source = interval(1000);
    const timer = source.pipe(takeWhile(() => this.isAlive));

    timer.subscribe(() => {
      if (this.counter > 1) {
        this.counter--;
      } else {
        this.router.navigate(["/"]);
      }
    });
  }
}
