import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableColumn } from '../../model/TableColumns.type';

@Component({
  selector: 'nsrtm-table-shell',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table-shell.component.html',
  styleUrls: ['./table-shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableShellComponent<T> {
  @Input() dataSource: T[] = [];
  @Input() columns: TableColumn<T>[] = [];
}
