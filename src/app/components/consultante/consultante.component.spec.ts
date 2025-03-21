import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultanteComponent } from './consultante.component';

describe('ConsultanteComponent', () => {
  let component: ConsultanteComponent;
  let fixture: ComponentFixture<ConsultanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultanteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
