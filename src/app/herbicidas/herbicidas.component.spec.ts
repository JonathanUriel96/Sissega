import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HerbicidasComponent } from './herbicidas.component';

describe('HerbicidasComponent', () => {
  let component: HerbicidasComponent;
  let fixture: ComponentFixture<HerbicidasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HerbicidasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HerbicidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
