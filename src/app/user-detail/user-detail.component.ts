import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { catchError, tap } from 'rxjs/operators';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user : any = {};
  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
  	this.route.params.subscribe(
  					params => {
  						this.userService.getUserById(params['id'])
  						.subscribe(user => this.user = user, error => console.log(error))
  					}
  		);
  }

}
