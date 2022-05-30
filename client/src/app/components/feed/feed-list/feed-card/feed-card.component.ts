import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Feed } from 'src/app/core/models/feed.class';

@Component({
  selector: 'app-feed-card',
  templateUrl: './feed-card.component.html',
  styleUrls: ['./feed-card.component.scss']
})
export class FeedCardComponent {
  @Input() feed!: Feed;

  constructor(private router: Router) { }

  handleClickDetail() {
    this.router.navigate(['detail', this.feed._id]);
  }
}
