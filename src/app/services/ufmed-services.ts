import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Ufmed } from '../classes/ufmed';


@Injectable()
export class  UfmedService {
    
    private url = environment.localUrl+'ufmed/';

    constructor(private http: HttpClient) {}

   public findAll(){
    return this.http.get<Ufmed[]>(this.url);
   }

   public insertUfmed(ufmed: Ufmed){
       return this.http.post(this.url, ufmed);
   }

   public getUfmed(id:number){
       return this.http.get<Ufmed>(this.url+id);
   }

   public deleteUfmed(id:number){
       return this.http.delete(this.url+id);
   }

   public updateUfmed(ufmed: Ufmed){
    return this.http.put(this.url, ufmed)
}
  
}

