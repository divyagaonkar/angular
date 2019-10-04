import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogBoxxComponent } from './dialog-boxx.component';

describe('DialogBoxxComponent', () => {
  let component: DialogBoxxComponent;
  let fixture: ComponentFixture<DialogBoxxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogBoxxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogBoxxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
