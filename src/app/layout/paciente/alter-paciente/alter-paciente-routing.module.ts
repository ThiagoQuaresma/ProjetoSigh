import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlterPacienteComponent } from './alter-paciente.component';

const routes: Routes = [
    {
        path:'', component: AlterPacienteComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AlterPacienteRoutingModule{

}