import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { GroupsComponent } from './groups/groups.component';
import {GroupsService} from "./services/groups.service";
import {UsersService} from "./services/users.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {Router, RouterModule, Routes} from "@angular/router";
import { SingleuserComponent } from './users/singleuser/singleuser.component';

const appRoutes: Routes = [
  { path: 'users', component: UsersComponent},
  { path: 'groups', component: GroupsComponent},
  { path: 'users/view/:id', component: SingleuserComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    GroupsComponent,
    SingleuserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    GroupsService,
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
