import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableGrantsComponent } from './table-grants.component';

describe('TableGrantsComponent', () => {
  let component: TableGrantsComponent;
  let fixture: ComponentFixture<TableGrantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableGrantsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableGrantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
