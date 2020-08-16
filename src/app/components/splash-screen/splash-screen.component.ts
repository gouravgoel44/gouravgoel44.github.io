import {
  Component,
  OnInit,
  ChangeDetectorRef,
  ApplicationRef,
} from '@angular/core';
import { PwaService } from 'src/app/services/pwa.service';
import { ChangeDetectionStrategy } from '@angular/core';
import {
  trigger,
  transition,
  style,
  animate,
  state,
  query,
  animateChild,
} from '@angular/animations';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss'],
  animations: [
    // the fade-in/fade-out animation.
    trigger('fadeOut', [
      transition(':leave', [
        query(':leave', animateChild(), { optional: true }),
        animate(300, style({ opacity: 0 })),
      ]),
    ]),
  ],
  // styles: [
  //   `
  //     .splash-screen {
  //       position: absolute;
  //       top: 0;
  //       right: 0;
  //       bottom: 0;
  //       left: 0;
  //       z-index: 9999;
  //     }
  //   `,
  // ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SplashScreenComponent implements OnInit {
  show = true;

  constructor(
    private pwaService: PwaService,
    private cdr: ChangeDetectorRef,
    private appRef: ApplicationRef
  ) {}

  ngOnInit() {
    this.pwaService.checkForUpdate().subscribe((result) => {
      this.show = result;
      this.cdr.detectChanges();
    });
  }
}
