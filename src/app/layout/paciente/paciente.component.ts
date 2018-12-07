import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.scss'],
  animations: [routerTransition()]
})
export class PacienteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}