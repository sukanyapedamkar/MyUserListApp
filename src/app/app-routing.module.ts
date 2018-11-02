import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { AddUserComponent } from './add-user/add-user.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
	{path:'add-user', component: AddUserComponent},
	{path:'users', component: UserListComponent},
	{path:'users/:id', component: UserDetailComponent},
	{path:'', redirectTo:'users', pathMatch:'full'},
	{path:'**', component: NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
