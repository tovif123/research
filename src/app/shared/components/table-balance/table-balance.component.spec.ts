import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableBalanceComponent } from './table-balance.component';

describe('TableBalanceComponent', () => {
  let component: TableBalanceComponent;
  let fixture: ComponentFixture<TableBalanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableBalanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
