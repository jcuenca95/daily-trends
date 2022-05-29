import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Feeds } from '../interfaces/feeds.interface';

@Injectable({
  providedIn: 'root'
})
export class FeedsService {
  private url = `${environment.feedsService}/feeds`

  constructor(private http: HttpClient) { }

  getFeeds(day: Date = new Date()): Observable<Feeds[]> {
    return this.http.get<Feeds[]>(this.url, { params: { day: day.toISOString() } })
  }
}
