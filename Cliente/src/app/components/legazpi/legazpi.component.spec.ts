import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegazpiComponent } from './legazpi.component';

describe('LegazpiComponent', () => {
  let component: LegazpiComponent;
  let fixture: ComponentFixture<LegazpiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegazpiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegazpiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
