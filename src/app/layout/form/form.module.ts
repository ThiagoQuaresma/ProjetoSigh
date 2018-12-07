import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';
import { PageHeaderModule } from './../../shared';
import { ChartsModule as Ng2Charts } from 'ng2-charts';
import { ChartsRoutingModule } from '../charts/charts-routing.module';
import { ChartsComponent } from '../charts/charts.component';



@NgModule({
    imports: [CommonModule,
              FormRoutingModule, 
              PageHeaderModule,
              Ng2Charts,
              ChartsRoutingModule],
    declarations: [FormComponent,ChartsComponent]
})
export class FormModule {}
