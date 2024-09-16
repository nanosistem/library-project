import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { initialPagination } from '../../constants/initialPagination';
import { IChangePaginate } from '../../model/IChangePaginate.type';
import { defaultPageSizes } from '../../constants/DefaultPageSizes';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { Observable, map } from 'rxjs';
import { InputState, ObservableState } from 'nsrtm-common/utils/state';

type PaginationInputState = {
  totalItems: number;
  pageSize: number;
  page: number;
}

type PaginationState = PaginationInputState;

type ViewModel = PaginationState & {
  to: number;
  from: number;
  pageSizes: number[];
  showPagination: boolean;
}

@Component({
  selector: 'nsrtm-table-footer-pagination',
  standalone: true,
  imports: [CommonModule, NgbPaginationModule, FormsModule],
  templateUrl: './table-footer-pagination.component.html',
  styleUrls: ['./table-footer-pagination.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableFooterPaginationComponent extends ObservableState<PaginationState> {
  @Input() totalItems = 0;
  @Input() pageSize = initialPagination.pageSize;
  @Input() page = initialPagination.page;

  @InputState() inputState$!: Observable<PaginationInputState>;

  @Output() changePaginate = new EventEmitter<IChangePaginate>();

  vm$: Observable<ViewModel> = this.onlySelectWhen(['page', 'pageSize', 'totalItems']).pipe(
    map(state => {
      const { page, pageSize, totalItems } = state;
      const to = Math.min(pageSize * page, totalItems);
      const from = pageSize * page - pageSize + 1;
      return {
        ...state,
        to,
        from,
        pageSizes: defaultPageSizes,
        showPagination: totalItems > 0
      };
    })
  );

  constructor() {
    super();
    
    this.initialize({
      totalItems: 0,
      pageSize: initialPagination.pageSize,
      page: initialPagination.page,
    }, this.inputState$);

  }

  onChangePageSize(pageSize: number) {
    this.patch({ pageSize });
    this.changePaginate.emit({ page: this.snapshot.page, pageSize });
  }

  onChangePaginate(page: number) {
    this.patch({ page });
    this.changePaginate.emit({ page, pageSize: this.snapshot.pageSize });
  }
}