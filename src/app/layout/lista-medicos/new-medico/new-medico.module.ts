import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewMedicoRoutingModule } from './new-medico-routing.module';
import { NewMedicoComponent } from './new-medico.component';
import { PageHeaderModule } from '../../../shared';
import { ChartsModule as Ng2Charts } from 'ng2-charts';
import { ChartsRoutingModule } from '../../charts/charts-routing.module';
import { ChartsComponent } from '../../charts/charts.component';



@NgModule({
    imports: [CommonModule,
              NewMedicoRoutingModule, 
              PageHeaderModule,
              FormsModule,
              Ng2Charts,
              ChartsRoutingModule],
    declarations: [NewMedicoComponent,ChartsComponent]
})
export class NewMedicoModule {}
