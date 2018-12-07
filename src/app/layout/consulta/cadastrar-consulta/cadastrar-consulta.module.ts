import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastrarConsultaComponent } from './cadastrar-consulta.component';
import { CadastrarConsultaRoutingModule } from './cadastrar-consulta-routing.module';

@NgModule({     
    imports: [CommonModule,
        CadastrarConsultaRoutingModule],
    declarations: [CadastrarConsultaComponent]
})

export class CadastrarConsultaModule{

}