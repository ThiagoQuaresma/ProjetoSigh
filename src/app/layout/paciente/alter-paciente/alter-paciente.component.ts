import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';

@Component({
  selector: 'app-new-paciente',
  templateUrl: './alter-paciente.component.html',
  styleUrls: ['./alter-paciente.component.scss'],
  animations: [routerTransition()]
})
export class AlterPacienteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
