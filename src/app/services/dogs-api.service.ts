import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from "@angular/common/http";
import { perro } from '../model/perro';
@Injectable({
  providedIn: 'root'
})
export class DogsApiService {
  url : string = "https://638038942f8f56e28e9e2bd4.mockapi.io/dogs";
  constructor(private httpClient: HttpClient) { }

  perro : perro | any = [];


  findAll<Perro>(): Observable<Perro[]> {
    return this.httpClient.get<Perro[]>(this.getUrl());
  }

  getUrl() {
    return this.url;
  }

  save(p: perro): Observable<perro> {
    return this.httpClient.post<perro>(this.getUrl(), p);
  }

  deleteById(id: any){
    this.httpClient.delete<void>(this.getUrl() + "/" + id).subscribe(() => {
    console.log("user deleted");
    window.location.reload();
    }
    );
  }
}
