import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { FeedComponent } from './components/feed/feed.component';
import { FeedListComponent } from './components/feed/feed-list/feed-list.component';
import { FeedFilterComponent } from './components/feed/feed-filter/feed-filter.component';
import { FeedCardComponent } from './components/feed/feed-list/feed-card/feed-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FeedDetailComponent } from './components/feed-detail/feed-detail.component';
import { FeedFormComponent } from './components/feed-form/feed-form.component';

const routes: Routes = [
  {
    path: '',
    component: FeedComponent,
    pathMatch: 'full'
  },
  {
    path: 'detail/:id',
    component: FeedDetailComponent
  },
  {
    path: 'edit/:id',
    component: FeedFormComponent
  },
  {
    path: 'create',
    component: FeedFormComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    FeedComponent,
    FeedListComponent,
    FeedFilterComponent,
    FeedCardComponent,
    FeedDetailComponent,
    FeedFormComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatButtonModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatDatepickerModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
