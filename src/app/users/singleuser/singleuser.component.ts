import { Component, OnInit } from '@angular/core';
import {UserModel} from "../../models/User.model";
import {ActivatedRoute, Router} from "@angular/router";
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-singleuser',
  templateUrl: './singleuser.component.html',
  styleUrls: ['./singleuser.component.css']
})
export class SingleuserComponent implements OnInit {

  user!: UserModel;
  id!: string;


  constructor(private route: ActivatedRoute,
              private service: UsersService,
              private router: Router) { }

  ngOnInit(): void {
    this.user = new UserModel('','','');
    this.id = this.route.snapshot.params['id'];
    this.service.getProductById(this.id).subscribe(
      data =>{
      this.user = data;
      },
      error => {
        console.log(error);
      }
    )
  }

  onBack(){
    this.router.navigate(['users']);
  }

}
