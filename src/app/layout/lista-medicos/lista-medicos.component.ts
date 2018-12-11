import { Component, OnInit } from '@angular/core';

import { routerTransition } from '../../router.animations';
import { MedicoService } from '../../services/medico-services';

@Component({
  selector: 'app-lista-medicos',
  templateUrl: './lista-medicos.component.html',
  styleUrls: ['./lista-medicos.component.scss'],
  animations: [routerTransition()]
})
export class ListaMedicosComponent implements OnInit {

  private medicoList = [];

  constructor(private medicoService: MedicoService) { }

  public findAll(){
    this.medicoService.findAll().subscribe( resultado => {

       this.medicoList = resultado;
    })
}

  ngOnInit() {
    this.findAll();
  }

}
