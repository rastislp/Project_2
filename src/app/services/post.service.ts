import { Injectable, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Post} from '../post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }
  
    getPostsData(): Observable<any> {
      return this.http.get("http://localhost:8081/api/posts");
    }

  private posts: Post[] = [];
  //private postsUpdated = new Subject<Post[]>();

  getPosts() {
    return [...this.posts];
  }

  addPost(product_id: string,product_name: string,product_category: string, product_price: string): Observable<any> {
    const post: Post = {product_id: product_id,product_name: product_name,product_category: product_category, product_price: product_price};
    return this.http.post("http://localhost:8081/api/posts",post);
  }
  deletePost(id: String): Observable<any>{
    return this.http.delete("http://localhost:8081/api/posts/" +id);
  }

}
