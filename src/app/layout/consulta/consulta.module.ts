import { AgendaModule } from './../agenda/agenda.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ConsultaComponent } from './consulta.component';
import { ConsultaRoutingModule } from './consulta-routing.module';
import { ModalDeletarComponent } from './modal-deletar/modal-deletar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({     
    imports: [CommonModule,
              FormsModule,
              ReactiveFormsModule,
              NgbModule.forRoot(),
              ConsultaRoutingModule],
    declarations: [ConsultaComponent, ModalDeletarComponent]
})

export class ConsultaModule{

}