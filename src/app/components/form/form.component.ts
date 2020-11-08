import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormWidget } from '../../models/form-widget';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormComponent {
  @Input() formWidget: FormWidget;
}
