import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Especialidade } from '../classes/especialidade';


@Injectable()
export class  EspecialidadeService {
    
    private url = environment.localUrl+'especialidade/';

    constructor(private http: HttpClient) {}

   public findAll(){
    return this.http.get<Especialidade[]>(this.url);
   }

   public insertEspecialidade(especialidade: Especialidade){
       return this.http.post(this.url, especialidade);
   }

   public getEspecialidade(id:number){
       return this.http.get<Especialidade>(this.url+id);
   }

   public deleteEspecialidade(id:number){
       return this.http.delete(this.url+id);
   }

   public updateEspecialidade(especialidade: Especialidade){
    return this.http.put(this.url, especialidade)
}
  
}

