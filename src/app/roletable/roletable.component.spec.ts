import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoletableComponent } from './roletable.component';

describe('RoletableComponent', () => {
  let component: RoletableComponent;
  let fixture: ComponentFixture<RoletableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoletableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoletableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
