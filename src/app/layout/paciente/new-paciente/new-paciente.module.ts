import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewPacienteComponent } from './new-paciente.component';
import { NewPacienteRoutingModule } from './new-paciente-routing.module';
import { TextMaskModule } from 'angular2-text-mask';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({     
    imports: [CommonModule,
              NewPacienteRoutingModule,
              FormsModule,
              ReactiveFormsModule,
              HttpModule,
              TextMaskModule],
    declarations: [NewPacienteComponent]
})

export class NewPacienteModule{

}