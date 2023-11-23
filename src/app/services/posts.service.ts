import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable, map } from "rxjs";
import { environment } from "src/environments/environment";
import { IPost } from "../interfaces";

@Injectable({
  providedIn: "root"
})
export class PostsService {
  private baseUrl = "http://localhost:3000";

  private httpClient = inject(HttpClient);

  findAll(search?: string): Observable<IPost[]> {
    const endpoint = search ? `?tag=${search}` : "";
    return this.httpClient.get<IPost[]>(`${this.baseUrl}/posts${endpoint}`);
  }

  findBySlug(slug: string): Observable<IPost | null> {
    return this.httpClient
      .get<IPost[]>(`${this.baseUrl}/posts?slug=${slug}`)
      .pipe(
        map(posts => {
          return posts[0] ?? null;
        })
      );
  }
}
