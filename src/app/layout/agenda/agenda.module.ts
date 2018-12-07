import { NewModalComponent } from './components/new-modal/new-modal.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AgendaComponent } from './agenda.component';
import { AgendaRoutingModule } from './agenda-routing.module';
import { ModalComponent } from './components';
import { TextMaskModule } from 'angular2-text-mask';

@NgModule({     
    imports: [CommonModule,
              FormsModule,
              ReactiveFormsModule,
              TextMaskModule,
              NgbModule.forRoot(),
              AgendaRoutingModule],
    declarations: [AgendaComponent,ModalComponent,NewModalComponent]
})

export class AgendaModule{
  
}