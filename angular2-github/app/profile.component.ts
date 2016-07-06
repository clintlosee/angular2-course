import {Component, OnInit, Input} from '@angular/core';
import {FollowersComponent} from './followers.component';
import {ProfileService} from './profile.service';
import {HTTP_PROVIDERS} from '@angular/http';
import {Observable} from 'rxjs/rx';
import 'rxjs/add/observable/forkJoin';

@Component({
    selector: 'profile',
    template: `
        <div *ngIf="isLoading"><i class="fa fa-spinner fa-spin fa-3x"></i></div>
        <div class="col-sm-5">
            <h1>@{{ profile.login }}</h1>
            <div>
                <img class="avatar" src="{{ profile.avatar_url }}" alt="{{ profile.login }}">
            </div>
            <h4>Followers: {{ profile.followers }}</h4>
            <div *ngFor="let follower of followers">
                <followers login="{{ follower.login }}" url="{{ follower.avatar_url }}"></followers>
            </div>
        </div>
    `,
    directives: [FollowersComponent],
    providers: [ProfileService, HTTP_PROVIDERS],
    styles: [`
        .avatar {
            width: 100px;
            height: 100px;
            border-radius: 100%;
        }
    `]
})

export class ProfileComponent implements OnInit {
    profile = {}; followers = [];
    isLoading = true;

    constructor(private _profileService: ProfileService) {
    }

    ngOnInit() {
        // this._profileService.getUser()
        //     .subscribe(profile => {
        //         this.isLoading = false;
        //         this.profile = profile;
        //         // console.log(profile);
        //     });
        // this._profileService.getFollowers()
        //     .subscribe(followers => {
        //         this.isLoading = false;
        //         this.followers = followers;
        //         // console.log(followers);
        //     })
        
        Observable.forkJoin(
            this._profileService.getUser(),
            this._profileService.getFollowers()
        ).subscribe(
            res => {
                this.profile = res[0];
                this.followers = res[1];
            },
            null,
            () => this.isLoading = false
        );

        // var observable = Observable.forkJoin(this.profile, this.followers);
        // console.log(observable);
    }

}