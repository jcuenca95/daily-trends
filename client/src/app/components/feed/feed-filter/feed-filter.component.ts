import { Component, EventEmitter, Output } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-feed-filter',
  templateUrl: './feed-filter.component.html',
  styleUrls: ['./feed-filter.component.scss']
})
export class FeedFilterComponent {
  @Output() change = new EventEmitter<{ day: string }>();

  handleDayChange(event: MatDatepickerInputEvent<Date>) {
    const value = event.value?.toISOString();
    this.change.emit({ day: value! });
  }
}
