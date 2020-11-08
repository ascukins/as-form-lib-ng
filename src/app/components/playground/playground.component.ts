import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { FormService } from '../../services/form.service';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlaygroundComponent {

  warning = '';
  constructor(public formService: FormService, private cdr: ChangeDetectorRef) {
  }

  loadJson(): void {
    this.formService.loadJson().
      pipe(
        tap(
          () => {
            this.warning = '';
            this.cdr.markForCheck();
          }
        ),
        catchError(() => {
          this.warning = `Can't load '${this.formService.jsonPath}'`;
          this.cdr.markForCheck();
          return of({});
        })
      ).subscribe();
  }
}
