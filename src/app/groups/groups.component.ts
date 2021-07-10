import { Component, OnInit } from '@angular/core';
import {GroupsService} from "../services/groups.service";
import {UserModel} from "../models/User.model";
import {HttpErrorResponse} from "@angular/common/http";
import {GroupModel} from "../models/Group.model";

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {

   public groups!: GroupModel[];

  constructor(private service: GroupsService) { }

  ngOnInit(): void {
    this.getGroups();
  }

  public getGroups(): void {
    this.service.getGroups().subscribe(
      (response: GroupModel[]) =>{
        this.groups = response;
      },
      (error: HttpErrorResponse) =>{
        alert(error.message);
      }
    );
  }

}
