import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCardRowComponent } from './home-card-row.component';

describe('HomeCardRowComponent', () => {
  let component: HomeCardRowComponent;
  let fixture: ComponentFixture<HomeCardRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeCardRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCardRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
