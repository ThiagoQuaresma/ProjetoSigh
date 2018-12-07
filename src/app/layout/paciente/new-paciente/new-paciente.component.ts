import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';

@Component({
  selector: 'app-new-paciente',
  templateUrl: './new-paciente.component.html',
  styleUrls: ['./new-paciente.component.scss'],
  animations: [routerTransition()]
})
export class NewPacienteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
