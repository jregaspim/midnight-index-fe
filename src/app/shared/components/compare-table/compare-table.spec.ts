import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareTable } from './compare-table';

describe('CompareTable', () => {
  let component: CompareTable;
  let fixture: ComponentFixture<CompareTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompareTable],
    }).compileComponents();

    fixture = TestBed.createComponent(CompareTable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
