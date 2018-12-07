import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlterMedicoComponent } from './alter-medico.component';

const routes: Routes = [
    {
        path: '', component: AlterMedicoComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AlterMedicoRoutingModule {
}
