import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDeletarPacienteComponent } from './modal-deletar-paciente.component';

describe('ModalDeletarPacienteComponent', () => {
  let component: ModalDeletarPacienteComponent;
  let fixture: ComponentFixture<ModalDeletarPacienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDeletarPacienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDeletarPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
