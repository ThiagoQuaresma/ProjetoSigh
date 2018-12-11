import { Medico } from './../classes/medico';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class  MedicoService {
    
    private url = environment.localUrl+'medico/';

    constructor(private http: HttpClient) {}

   public findAll(){
    return this.http.get<Medico[]>(this.url);
   }

   public insertMedico(medico: Medico){
       return this.http.post(this.url, medico);
   }

   public getMedico(id:number){
       return this.http.get<Medico>(this.url+id);
   }

   public deleteMedico(id:number){
       return this.http.delete(this.url+id);
   }

   public updateMedico(medico: Medico){
    return this.http.put(this.url, medico)
}
  
}

