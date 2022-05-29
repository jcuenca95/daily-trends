import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FeedComponent } from './components/feed/feed.component';
import { FeedListComponent } from './components/feed/feed-list/feed-list.component';
import { FeedFilterComponent } from './components/feed/feed-filter/feed-filter.component';
import { FeedCardComponent } from './components/feed/feed-list/feed-card/feed-card.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    FeedComponent,
    FeedListComponent,
    FeedFilterComponent,
    FeedCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
