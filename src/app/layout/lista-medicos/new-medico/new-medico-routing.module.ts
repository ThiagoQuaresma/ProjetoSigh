import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewMedicoComponent } from './new-medico.component';

const routes: Routes = [
    {
        path: '', component: NewMedicoComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NewMedicoRoutingModule {
}
