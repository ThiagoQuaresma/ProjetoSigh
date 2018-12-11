import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { MedicoService } from '../../../services/medico-services';
import { Medico } from '../../../classes/medico';
import { UfmedService } from '../../../services/ufmed-services';
import { Ufmed } from '../../../classes/ufmed';

@Component({
    selector: 'app-new-medico',
    templateUrl: './new-medico.component.html',
    styleUrls: ['./new-medico.component.scss'],
    animations: [routerTransition()]
})
export class NewMedicoComponent implements OnInit {
    id: any
    constructor(
        private ufmedService: UfmedService,
        private medicioService: MedicoService
        // private especialidadeService: EspecialidadeService,

    ) { }

    public medico = new Medico();
    public ufmed = new Ufmed();

    // public especialidade = new Especialidade();

    private medicoList = [];


    public insertMedico() {
        console.log(this.medico);
        this.id = this.medico.id;
        this.medicioService.insertMedico(this.medico).subscribe(Response => {
            console.log('Sucesso');
        })
    }

    public insertUfmed() {
        console.log(this.ufmed);
        this.ufmed.medico_idmedico = this.id;
        this.ufmedService.insertUfmed(this.ufmed).subscribe(Response => {
            console.log('Sucesso');
        })
    }

    insertAll() {
        this.insertMedico();
        this.insertUfmed();
    }

    ngOnInit() {
        //this.findAll();
    }
}
