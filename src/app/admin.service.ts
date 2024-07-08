import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  API="http://localhost:8080";
  constructor(private http: HttpClient) { }
  public registerAdmin(adminData: any)
  {
    return this.http.post(`${this.API}/adminservice` , adminData);
  }

  public getAdmins(){
    return this.http.get(`${this.API}/adminservice`);
  }

  public deleteAdmin(id:any){
    return this.http.delete(`${this.API}/adminservice/${id}`);
  }

  public updateAdmin(admin: any){
    return this.http.put(`${this.API}/adminservice/${admin.id}`, admin);
  }
  
}
