import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDeletarMedicoComponent } from './modal-deletar-medico.component';

describe('ModalDeletarMedicoComponent', () => {
  let component: ModalDeletarMedicoComponent;
  let fixture: ComponentFixture<ModalDeletarMedicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDeletarMedicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDeletarMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
