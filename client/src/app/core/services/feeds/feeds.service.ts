import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Feed } from '../../models/feed.class';
import { Feeds } from '../../interfaces/feeds.interface';

@Injectable({
  providedIn: 'root'
})
export class FeedsService {
  private url = `${environment.feedsService}/feeds`

  constructor(private http: HttpClient) { }

  getFeeds(day: string = new Date().toISOString()): Observable<Feed[]> {
    return this.http.get<Feeds[]>(
      this.url,
      { params: { day } }
      ).pipe(map(feeds => feeds.map(feed=> new Feed(feed))))
  }
}
