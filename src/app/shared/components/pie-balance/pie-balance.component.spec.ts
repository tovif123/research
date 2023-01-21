import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieBalanceComponent } from './pie-balance.component';

describe('PieBalanceComponent', () => {
  let component: PieBalanceComponent;
  let fixture: ComponentFixture<PieBalanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PieBalanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PieBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
