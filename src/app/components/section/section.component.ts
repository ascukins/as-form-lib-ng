import { Component, OnChanges, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormSection } from '../../models/form-section';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SectionComponent implements OnChanges {
  @Input() formSection: FormSection;
  gridColumns = 1;
  ngOnChanges(): void {
    this.gridColumns = this.formSection.columns || 1;
  }
}
