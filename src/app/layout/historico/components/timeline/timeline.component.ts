import { Component, OnInit } from '@angular/core';
import { HistoricoService } from '../../../../services/historico-service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  
 
  private historicoList = [];

  constructor(private consultaService: HistoricoService) { }

  public findAll(){
    this.consultaService.findAll().subscribe( resultado => {

       this.historicoList = resultado;
    })
}

  ngOnInit() {
    this.findAll();
  }

}
