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


  findAll<Perro>(): Observable<Perro[]> {
    return this.httpClient.get<Perro[]>(this.getUrl());
  }

  getUrl() {
    return this.url;
  }

  save(p: perro): Observable<perro> {
    return this.httpClient.post<perro>(this.getUrl(), p);
  }

  deleteById(id: any) {
    console.log(this.getUrl() + "/" + id);
    this.httpClient.delete(this.getUrl() + "/" + id);
  }
}
