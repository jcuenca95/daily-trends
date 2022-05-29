import { Component, Input, OnInit } from '@angular/core';
import { Feed } from 'src/app/core/models/feed.class';

@Component({
  selector: 'app-feed-list',
  templateUrl: './feed-list.component.html',
  styleUrls: ['./feed-list.component.scss']
})
export class FeedListComponent {
  @Input() feeds!: Feed[];
}
