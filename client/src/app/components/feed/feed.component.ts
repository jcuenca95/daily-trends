import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, startWith, switchMap, tap } from 'rxjs';
import { FeedsService } from 'src/app/core/feeds/feeds.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  private day$ = this.activeRoute.queryParams.pipe(
    map(({ day }) => day ? new Date(day) : new Date())
  )
  feeds$ = this.day$.pipe(
    switchMap((day) => this.feedsService.getFeeds(day))
  );

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private feedsService: FeedsService
  ) { }

  ngOnInit(): void {
  }

  handleFilterChange({ day }: { day: string }) {
    this.router.navigate([], {
      queryParams: {
        day
      }
    })
  }

}
