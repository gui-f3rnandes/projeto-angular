import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompTableComponent } from './comp-table.component';

describe('CompTableComponent', () => {
  let component: CompTableComponent;
  let fixture: ComponentFixture<CompTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
