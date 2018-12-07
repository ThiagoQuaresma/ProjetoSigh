
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgendamentoComponent } from './agendamento.component';
import { AgendamentoRoutingModule } from './agendamento-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CollapseComponent, ModalComponent } from '../../bs-component/components';
import { NewModalComponent } from './../../bs-component/components/new-modal/new-modal.component';
// import { CollapseComponent } from './../../bs-component/components/collapse/collapse.component';

@NgModule({     
    imports: [CommonModule,
              AgendamentoRoutingModule,
              FormsModule,
              ReactiveFormsModule,
              NgbModule.forRoot(),],
    declarations: [AgendamentoComponent,CollapseComponent,ModalComponent,NewModalComponent]
})

export class AgendamentoModule{

}