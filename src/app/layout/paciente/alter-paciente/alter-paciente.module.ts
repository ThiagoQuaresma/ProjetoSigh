import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlterPacienteComponent } from './alter-paciente.component';
import { AlterPacienteRoutingModule } from './alter-paciente-routing.module';

@NgModule({     
    imports: [CommonModule,
              AlterPacienteRoutingModule],
    declarations: [AlterPacienteComponent]
})

export class AlterPacienteModule{

}