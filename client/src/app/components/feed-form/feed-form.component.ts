import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { of, switchMap, tap } from 'rxjs';
import { Feed } from 'src/app/core/models/feed.class';
import { FeedsService } from 'src/app/core/services/feeds/feeds.service';

@Component({
  selector: 'app-feed-form',
  templateUrl: './feed-form.component.html',
  styleUrls: ['./feed-form.component.scss']
})
export class FeedFormComponent {

  feed$ = this.activeRoute.params.pipe(
    switchMap(({ id }) => {
      if (!id) {
        return of(new Feed({
          body: '',
          image: '',
          publisher: '',
          source: '',
          title: ''
        }))
      }
      return this.feedsService.getOne(id)
    }),
    tap(({
      body,
      image,
      publisher,
      source,
      title
    }) => {
      this.formGroup.setValue({
        body,
        image,
        publisher,
        source,
        title
      })
    })
  );

  formGroup = new FormGroup({
    title: new FormControl(),
    image: new FormControl(),
    body: new FormControl(),
    source: new FormControl(),
    publisher: new FormControl()
  })

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private feedsService: FeedsService
  ) { }

  get feedModel(): Feed {
    return new Feed(this.formGroup.value)
  }

  async handleClickButton(id: string | undefined) {
    const body = this.formGroup.value;
    await (id
      ? this.feedsService.updateOne(id, body)
      : this.feedsService.createOne(body)).toPromise()
    this.router.navigateByUrl('/')
  }
}
