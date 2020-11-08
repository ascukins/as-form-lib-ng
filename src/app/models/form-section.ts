import { FormItem } from './form-item';

export interface FormSection {
  type: 'section';
  header: string;
  columns: number;
  items: FormItem[];
}
