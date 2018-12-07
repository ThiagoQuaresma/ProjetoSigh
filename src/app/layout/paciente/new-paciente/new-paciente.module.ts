import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewPacienteComponent } from './new-paciente.component';
import { NewPacienteRoutingModule } from './new-paciente-routing.module';

@NgModule({     
    imports: [CommonModule,
              NewPacienteRoutingModule],
    declarations: [NewPacienteComponent]
})

export class NewPacienteModule{

}