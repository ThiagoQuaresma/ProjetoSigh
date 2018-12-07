import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaMedicosComponent } from './lista-medicos.component';
import { ListaMedicosRoutingModule } from './lista-medicos-routing.module';
import { ModalDeletarMedicoComponent } from './modal-deletar-medico/modal-deletar-medico.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({     
    imports: [CommonModule,
              FormsModule,
              ReactiveFormsModule,
              NgbModule.forRoot(),
              ListaMedicosRoutingModule],
    declarations: [ListaMedicosComponent, ModalDeletarMedicoComponent]
})

export class ListaMedicosModule{

}