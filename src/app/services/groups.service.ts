import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserModel} from "../models/User.model";
import {GroupModel} from "../models/Group.model";

@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  private apiServerUrl = environment.baseurl;

  constructor(private http: HttpClient) { }

  public getGroups(): Observable<GroupModel[]>{
    return this.http.get<GroupModel[]>(`${this.apiServerUrl}/groups/all`);
  }
}
