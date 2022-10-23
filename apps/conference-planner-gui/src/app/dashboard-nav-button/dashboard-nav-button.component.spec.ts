import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardNavButtonComponent } from './dashboard-nav-button.component';

describe('DashboardNavButtonComponent', () => {
  let component: DashboardNavButtonComponent;
  let fixture: ComponentFixture<DashboardNavButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardNavButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardNavButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
