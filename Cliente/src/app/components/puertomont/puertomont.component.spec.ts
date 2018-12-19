import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuertomontComponent } from './puertomont.component';

describe('PuertomontComponent', () => {
  let component: PuertomontComponent;
  let fixture: ComponentFixture<PuertomontComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuertomontComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuertomontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
