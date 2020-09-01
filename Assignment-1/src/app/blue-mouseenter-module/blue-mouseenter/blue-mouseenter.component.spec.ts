import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlueMouseenterComponent } from './blue-mouseenter.component';

describe('BlueMouseenterComponent', () => {
  let component: BlueMouseenterComponent;
  let fixture: ComponentFixture<BlueMouseenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlueMouseenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlueMouseenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
