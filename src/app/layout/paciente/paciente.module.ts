import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PacienteComponent } from './paciente.component';
import { PacienteRoutingModule } from './paciente-routing.module';
import { ModalDeletarPacienteComponent } from './modal-deletar-paciente/modal-deletar-paciente.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TextMaskModule } from 'angular2-text-mask';

@NgModule({     
    imports: [CommonModule,
              FormsModule,
              ReactiveFormsModule,
              NgbModule.forRoot(),
              PacienteRoutingModule],
    declarations: [PacienteComponent, ModalDeletarPacienteComponent]
})

export class PacienteModule{

}