import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';

@Component({
    selector: 'app-new-medico',
    templateUrl: './new-medico.component.html',
    styleUrls: ['./new-medico.component.scss'],
    animations: [routerTransition()]
})
export class NewMedicoComponent implements OnInit {
    constructor() {}

    ngOnInit() {}

    public myModel = ''
    public mask = ['(', /[1-9]/, /\d/, ')', ' ',/[9-9]/, ' ',/\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
}
