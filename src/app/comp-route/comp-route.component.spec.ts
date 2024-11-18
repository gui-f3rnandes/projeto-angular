import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompRouteComponent } from './comp-route.component';

describe('CompRouteComponent', () => {
  let component: CompRouteComponent;
  let fixture: ComponentFixture<CompRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompRouteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
