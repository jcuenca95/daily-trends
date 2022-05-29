import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-feed-filter',
  templateUrl: './feed-filter.component.html',
  styleUrls: ['./feed-filter.component.scss']
})
export class FeedFilterComponent {
  @Output() change = new EventEmitter<{ day: string }>()

  handleDayChange(event: any) {
    this.change.emit({
      day: event.target.value
    })
  }

}
