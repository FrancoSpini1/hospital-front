import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnoNuevo } from './turno-nuevo';

describe('TurnoNuevo', () => {
  let component: TurnoNuevo;
  let fixture: ComponentFixture<TurnoNuevo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TurnoNuevo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TurnoNuevo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
