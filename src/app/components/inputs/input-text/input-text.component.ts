import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormItem } from '../../../models/form-item';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputTextComponent {
  @Input() formItem: FormItem;
}
