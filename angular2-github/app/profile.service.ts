import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class ProfileService {
    constructor(private _http: Http) {}

    getUser() {
        return this._http.get("https://api.github.com/users/octocat")
            .map(res => res.json());
    }

    getFollowers() {
        return this._http.get("https://api.github.com/users/octocat/followers")
            .map(res => res.json());
    }
}