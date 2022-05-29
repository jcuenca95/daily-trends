import { Component, Input, OnInit } from '@angular/core';
import { Feeds } from 'src/app/core/interfaces/feeds.interface';

@Component({
  selector: 'app-feed-card',
  templateUrl: './feed-card.component.html',
  styleUrls: ['./feed-card.component.scss']
})
export class FeedCardComponent {
    @Input() feed!: Feeds;
}
