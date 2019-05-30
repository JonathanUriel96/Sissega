import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesparasitantesComponent } from './desparasitantes.component';

describe('DesparasitantesComponent', () => {
  let component: DesparasitantesComponent;
  let fixture: ComponentFixture<DesparasitantesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesparasitantesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesparasitantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
