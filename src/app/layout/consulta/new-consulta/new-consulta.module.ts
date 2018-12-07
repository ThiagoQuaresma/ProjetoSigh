import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewConsultaComponent } from './new-consulta.component';
import { NewConsultaRoutingModule } from './new-consulta-routing.module';

@NgModule({     
    imports: [CommonModule,
              NewConsultaRoutingModule],
    declarations: [NewConsultaComponent]
})

export class NewConsultaModule{

}