import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { PacienteService } from '../../services/paciente-services';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.scss'],
  animations: [routerTransition()]
})
export class PacienteComponent implements OnInit {

  
  private pacienteList = [];

  constructor(private pacienteService: PacienteService) { }

  public findAll(){
    this.pacienteService.findAll().subscribe( resultado => {

       this.pacienteList = resultado;
    })
}

  ngOnInit() {
    this.findAll();
  }

  public myModel = ''
  public mask = ['(', /[1-9]/, /\d/, ')', ' ',/[9-9]/, ' ',/\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]

}
