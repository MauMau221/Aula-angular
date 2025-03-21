import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciaisComponent } from './iniciais.component';

describe('IniciaisComponent', () => {
  let component: IniciaisComponent;
  let fixture: ComponentFixture<IniciaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IniciaisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IniciaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
