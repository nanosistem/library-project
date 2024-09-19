import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableShellComponent } from './table-shell.component';

describe('TableShellComponent', () => {
  let component: TableShellComponent<any>;
  let fixture: ComponentFixture<TableShellComponent<any>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ TableShellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
