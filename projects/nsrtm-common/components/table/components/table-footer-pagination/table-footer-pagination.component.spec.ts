import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableFooterPaginationComponent } from './table-footer-pagination.component';

describe('TableFooterPaginationComponent', () => {
  let component: TableFooterPaginationComponent;
  let fixture: ComponentFixture<TableFooterPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ TableFooterPaginationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableFooterPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
