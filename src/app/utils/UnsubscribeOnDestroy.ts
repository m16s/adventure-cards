import { OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

export class UnsubscribeOnDestroy implements OnDestroy {
  unsubscribe$ = new Subject();

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
