import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbcompComponent } from './dbcomp.component';

describe('DbcompComponent', () => {
  let component: DbcompComponent;
  let fixture: ComponentFixture<DbcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DbcompComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DbcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
