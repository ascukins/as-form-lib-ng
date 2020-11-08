export interface FormItem {
  type: 'input' | 'currency' | 'date';
  label: string;
  value: any;
  required?: boolean;
  symbol?: string;
  precision?: number;
}
