import { Component, OnInit } from '@angular/core';
import {UsersService} from "../services/users.service";
import {Router} from "@angular/router";
import {UserModel} from "../models/User.model";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public users: UserModel[] | undefined;

  constructor(private service: UsersService,
              private router: Router) { }

  ngOnInit(): void {
    this.getUsers();
  }

  public getUsers(): void {
    this.service.getUsers().subscribe(
      (response: UserModel[]) =>{
        this.users = response;
      },
      (error: HttpErrorResponse) =>{
        alert(error.message);
      }
    );
  }

  public getOneUser(id: string){
    this.router.navigate(['users','view',id]);
  }

}
