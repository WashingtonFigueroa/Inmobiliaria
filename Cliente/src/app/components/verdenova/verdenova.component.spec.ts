import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerdenovaComponent } from './verdenova.component';

describe('VerdenovaComponent', () => {
  let component: VerdenovaComponent;
  let fixture: ComponentFixture<VerdenovaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerdenovaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerdenovaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
