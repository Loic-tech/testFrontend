import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserModel} from "../models/User.model";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiServerUrl = environment.baseurl;

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<UserModel[]>{
    return this.http.get<UserModel[]>(`${this.apiServerUrl}/users/all`);
  }

  public getProductById(id: string): Observable<UserModel>{
    return this.http.get<UserModel>(`${this.apiServerUrl}/users/${id}`);
  }
}
