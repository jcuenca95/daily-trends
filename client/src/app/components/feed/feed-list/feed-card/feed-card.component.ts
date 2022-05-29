import { Component, Input, OnInit } from '@angular/core';
import { Feed } from 'src/app/core/models/feed.class';

@Component({
  selector: 'app-feed-card',
  templateUrl: './feed-card.component.html',
  styleUrls: ['./feed-card.component.scss']
})
export class FeedCardComponent {
    @Input() feed!: Feed;
}
