import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  public API = '//thawing-chamber-47973.herokuapp.com';
  public OWNER_API = this.API + '/owners';



  constructor(private http:HttpClient) {
}

  getAll(): Observable<any> {
  return this.http.get('https://thawing-chamber-47973.herokuapp.com/owners');
}

get(id: string) {
  return this.http.get(id);
}


save(owner: any): Observable<any> {
  let result: Observable<Object>;
  if(owner)
  {
      result=this.http.put(owner.href,owner)
  }
  else{
    
    result = this.http.post(this.OWNER_API,owner);
  }
  

      
    return result;
}


remove(href: string) {
  return this.http.delete(href);
}







}
