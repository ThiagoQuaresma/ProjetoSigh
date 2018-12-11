import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Historico } from '../classes/historico';


@Injectable()
export class  HistoricoService {
    
    private url = environment.localUrl+'historico/';

    constructor(private http: HttpClient) {}

   public findAll(){
    return this.http.get<Historico[]>(this.url);
   }

   public insertHistorico(historico: Historico){
       return this.http.post(this.url, historico);
   }

   public getHistorico(id:number){
       return this.http.get<Historico>(this.url+id);
   }

   public deleteHistorico(id:number){
       return this.http.delete(this.url+id);
   }

   public updateHistorico(historico: Historico){
    return this.http.put(this.url, historico)
}
  
}

