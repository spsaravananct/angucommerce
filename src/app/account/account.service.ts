import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject, catchError, map, Observable, of, ReplaySubject, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { User, Userdata } from '../shared/models/userdata.model';
import { Router } from '@angular/router';
import { Address, AddressData } from '../shared/models/address.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  baseUrl=environment.baseUrl;

  private currentUserSource= new ReplaySubject<User>(1);
  
  currentUser$=this.currentUserSource.asObservable();

  constructor(private http: HttpClient,private router:Router) { 

  }

  loadCurrentUser(token:String){

    if(token===null){
      this.currentUserSource.next(null!);
      return of();
    }

    let headers = new HttpHeaders();
    headers=headers.set('Authorization',`Bearer ${token}`);    
    let params= new HttpParams();

    return this.http.get<User>(this.baseUrl+'users/me',{headers}).pipe(
      map((user:User)=>{
        if(user){
          this.currentUserSource.next(user);
        }
      })
    );

  }

  login(values:any){

    let altervalue={
      "identifier": values.email,
      "password": values.password
    }

    return this.http.post<Userdata>(this.baseUrl + 'auth/local', altervalue).pipe(
      map((user:Userdata)=>{
        if(user){
          localStorage.setItem('token',user.jwt);
          this.currentUserSource.next(user.user);
        }
      })
    );
  }

 register(values:any){
    return this.http.post<Userdata>(this.baseUrl + 'auth/local/register', values).pipe(
      map((user:Userdata)=>{
        if(user){
          localStorage.setItem('token',user.jwt);
          this.currentUserSource.next(user.user);
        }
      })
    );
 }

  logout(){
    localStorage.removeItem('token');
    this.currentUserSource.next(null!);
    this.router.navigateByUrl('/');
  }

  getUserAddress(user_id:Number){
    return this.http.get<Address>(this.baseUrl+'addresses?filters[users_permissions_user][id]='+ user_id)
    .pipe(map(resp => resp));
  }

  updateUserAddress(address:AddressData,user_id:Number){
    return this.http.post<AddressData>(this.baseUrl+'setaddress',{user_id,address}, this.httpOptions);
  }

}
