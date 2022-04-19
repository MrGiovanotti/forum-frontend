import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from '../models/comment.model';
import { Forum } from '../models/forum.model';
import { RequestHelper } from '../models/request-helper.model';
import { ConstantsUtils } from '../utils/constants.utils';

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  private URL: string;

  constructor(private http: HttpClient) {
    this.URL = ConstantsUtils.BACKEND_URL;
  }

  getForum(): Observable<Forum> {
    const ACTION = 'all-comments';
    return this.http.get(this.URL.concat(ACTION)) as Observable<Forum>;
  }

  addComment(comment: RequestHelper): Observable<any> {
    const ACTION = 'add-comment';
    return this.http.post<any>(this.URL.concat(ACTION), comment);
  }


}
