import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterPacienteComponent } from './alter-paciente.component';

describe('AlterPacienteComponent', () => {
  let component: AlterPacienteComponent;
  let fixture: ComponentFixture<AlterPacienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlterPacienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
