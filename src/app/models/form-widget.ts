import { FormSection } from './form-section';

export interface FormWidget {
  id: number;
  name: string;
  type: 'form';
  items: FormSection[];
}
