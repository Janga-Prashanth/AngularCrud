import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  // curl="http://localhost:3000/";

  getallproducts(){
    return this.http.get("http://localhost:3000/MyMobiles/");
  }

  getproduct(id:number){
    return this.http.get("http://localhost:3000/MyMobiles/"+id);
  }

  deleteproduct(id:number){
    return this.http.delete("http://localhost:3000/MyMobiles/"+id);
  }

  postproduct(data:any){
    return this.http.post("http://localhost:3000/MyMobiles/",data);
  }

  updateproduct(id:number, data:any){
    return this.http.put("http://localhost:3000/MyMobiles/"+id,data);
  }

  getmobilename(){
    return this.http.get("http://localhost:3000/mobilename/");
  }

  getmobilelook(){
    return this.http.get("http://localhost:3000/mobilelook/");
  }
}
