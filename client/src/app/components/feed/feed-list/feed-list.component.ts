import { Component, Input, OnInit } from '@angular/core';
import { Feeds } from 'src/app/core/interfaces/feeds.interface';

@Component({
  selector: 'app-feed-list',
  templateUrl: './feed-list.component.html',
  styleUrls: ['./feed-list.component.scss']
})
export class FeedListComponent {
  @Input() feeds!: Feeds[];
}
