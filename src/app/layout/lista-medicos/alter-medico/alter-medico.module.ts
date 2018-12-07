import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AlterMedicoRoutingModule } from './alter-medico-routing.module';
import { AlterMedicoComponent } from './alter-medico.component';
import { PageHeaderModule } from '../../../shared';
import { ChartsModule as Ng2Charts } from 'ng2-charts';
import { ChartsRoutingModule } from '../../charts/charts-routing.module';
import { ChartsComponent } from '../../charts/charts.component';



@NgModule({
    imports: [CommonModule,
              AlterMedicoRoutingModule, 
              PageHeaderModule,
              Ng2Charts,
              ChartsRoutingModule],
    declarations: [AlterMedicoComponent,ChartsComponent]
})
export class AlterMedicoModule {}
