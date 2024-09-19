export type TableColumn<T> = {  
  label: string;
  property: keyof T;
  type: 'text' | 'number' | 'date' ;
  width: string;
  align: 'left' | 'center' | 'right';
};