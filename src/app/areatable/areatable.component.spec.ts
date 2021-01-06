import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreatableComponent } from './areatable.component';

describe('AreatableComponent', () => {
  let component: AreatableComponent;
  let fixture: ComponentFixture<AreatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreatableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
