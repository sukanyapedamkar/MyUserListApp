import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FilterPipe} from './filter.pipe';


@Component({
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
	title:string;
	userList : any = [];

	constructor(private userService : UserService){
	this.title = "Users List";
	}

	ngOnInit() {

	this.userService.getUsers()
				.subscribe(
					users => this.userList = users,
					error => console.log(error)
				);

	};
}
