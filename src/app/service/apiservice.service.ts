import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  server_url="https://angular-api-testserverr.onrender.com/allemp"
  
  constructor(private http:HttpClient) { }
// display employe
  showAPI(){ return this.http.get(`${this.server_url}`)}

  // add employee
  addAPI(reqBody:any){ return this.http.post(`${this.server_url}`,reqBody)}
  // delete employe
  delAPI(id:any){ return this.http.delete(`${this.server_url}/${id}`)}
 //  showsingleapi
  showoneAPI(id:any){ return this.http.get(`${this.server_url}/${id}`)}
// update api
UpdateAPI(id:any,reqBody:any){ return this.http.put(`${this.server_url}/${id}`,reqBody)}

filterAPI(status: string) {
  return this.http.get(`${this.server_url}?status=${status}`);
}

} 
