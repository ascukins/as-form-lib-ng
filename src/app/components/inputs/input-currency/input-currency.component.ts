import { Component, Input, OnChanges, ChangeDetectionStrategy } from '@angular/core';
import { FormItem } from '../../../models/form-item';

@Component({
  selector: 'app-input-currency',
  templateUrl: './input-currency.component.html',
  styleUrls: ['./input-currency.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputCurrencyComponent implements OnChanges {

  @Input() formItem: FormItem;

  CurrencyPrefixes = {
    EUR: '€',
    USD: '$'
  };

  numberStep: number;

  roundValueToPrecision(): void {
    if (this.formItem.value) {
      this.formItem.value =
        Math.floor(this.formItem.value * Math.pow(10, this.formItem.precision))
        / Math.pow(10, this.formItem.precision);
    }
  }

  calculatePrecision(): void {
    if (!this.formItem.precision) {
      this.formItem.precision = 0;
    }
    this.numberStep = Math.pow(10, -this.formItem.precision);
  }

  ngOnChanges(): void {
    this.calculatePrecision();
  }

}
