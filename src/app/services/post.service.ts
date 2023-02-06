import { Post } from "./../Post";
import { environment } from "./../../environments/environment.development";
import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class PostService {
  url: string = environment.back_url;
  constructor(private _http: HttpClient) {}

  List() {
    return this._http.get<Post[]>(this.url);
  }

  search(q: string) {
    let params = new HttpParams();
    params = params.append("q", q);

    return this._http.get<Post[]>(this.url + "post/search", { params: params });
  }

  getById(id : string) {
    return this._http.get<Post>(this.url + "get_post/" + id);
  }

  add(data: Post) {
    return this._http.post(this.url + "post/", data);
  }
  handleVote(id: string, vote: string) {
    return this._http.put(this.url + "post/" + vote + "/" + id, {});
  }
}
