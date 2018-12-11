import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ConsultaService } from '../../services/consulta-services';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss'],
  animations: [routerTransition()]
})
export class ConsultaComponent implements OnInit {

  private consultaList = [];

  constructor(private consultaService: ConsultaService) { }

  public findAll(){
    this.consultaService.findAll().subscribe( resultado => {

       this.consultaList = resultado;
    })
}

  ngOnInit() {
    this.findAll();
  }

}
