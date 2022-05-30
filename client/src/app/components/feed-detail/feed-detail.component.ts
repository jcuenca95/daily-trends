import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { FeedsService } from 'src/app/core/services/feeds/feeds.service';

@Component({
  selector: 'app-feed-detail',
  templateUrl: './feed-detail.component.html',
  styleUrls: ['./feed-detail.component.scss']
})
export class FeedDetailComponent implements OnInit {

  feed$ = this.activeRoute.params.pipe(
    switchMap(({ id }) => this.feedsService.getOne(id))
  )

  constructor(
    private activeRoute: ActivatedRoute,
    private feedsService: FeedsService
  ) { }

  ngOnInit(): void {
  }

}
