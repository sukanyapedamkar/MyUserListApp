import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { FilterPipe} from './filter.pipe';


import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';

import { UserService } from './user.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { AddUserComponent } from './add-user/add-user.component';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    NotFoundComponent,
    UserDetailComponent,
    AddUserComponent
  ],
  imports: [
  	NgbModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
