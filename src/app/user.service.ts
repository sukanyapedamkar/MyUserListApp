import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { filter, map, catchError } from 'rxjs/operators';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';


@Injectable()
export class UserService{
	
	constructor(private http:Http){}

	getUsers(): Observable<any[]>{
		return this.http.get("http://mocker.ennate.academy/users")
						.map(response => response.json())
						.catch(error => Observable.throw(error.statusText));
	}

	addUser(user): Observable<any>{
		let  headers = new Headers({'Content-Type':'application/json'});
 		let  options = new RequestOptions({headers:headers});

 		return this.http.post("http://mocker.ennate.academy/users", user, options)
     				.map(response => response.json())
     				.catch(error => Observable.throw(error.statusText));
	}


	getUserById(id: string): Observable<any[]>{
		return this.http.get(`http://mocker.ennate.academy/users/${id}`)
						.map(response => response.json())
						.catch(error => Observable.throw(error.statusText));
	}

}