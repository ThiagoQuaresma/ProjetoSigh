import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewPacienteComponent } from './new-paciente.component';

const routes: Routes = [
    {
        path:'', component: NewPacienteComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class NewPacienteRoutingModule{

}