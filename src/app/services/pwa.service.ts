import { Injectable, ApplicationRef } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { from as fromPromise, Observable, of, timer } from 'rxjs';
import { mapTo, timeout, switchMap, catchError, first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PwaService {
  promptEvent: any;

  constructor(private appRef: ApplicationRef, private swUpdate: SwUpdate) {
    if (this.swUpdate.isEnabled) {
      this.appRef.isStable
        .pipe(
          first((isStable) => isStable === true),
          switchMap(() => this.swUpdate.available)
        )
        .subscribe(() => {
          this.swUpdate.activateUpdate().then(() => document.location.reload());
        });
    }
    debugger;
    window.addEventListener('beforeinstallprompt', (event) => {
      this.promptEvent = event;
    });
  }

  checkForUpdate(): Observable<boolean> {
    const waitFor = 1000;

    if (this.swUpdate.isEnabled) {
      const available$ = this.swUpdate.available.pipe(
        mapTo(true),
        timeout(waitFor),
        catchError(() => of(false))
      );

      return fromPromise(this.swUpdate.checkForUpdate()).pipe(
        switchMap(() => available$)
      );
    }

    return timer(waitFor).pipe(mapTo(false));
  }
}
