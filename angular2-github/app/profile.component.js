"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var followers_component_1 = require('./followers.component');
var profile_service_1 = require('./profile.service');
var http_1 = require('@angular/http');
var rx_1 = require('rxjs/rx');
require('rxjs/add/observable/forkJoin');
var ProfileComponent = (function () {
    function ProfileComponent(_profileService) {
        this._profileService = _profileService;
        this.profile = {};
        this.followers = [];
        this.isLoading = true;
    }
    ProfileComponent.prototype.ngOnInit = function () {
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
        var _this = this;
        rx_1.Observable.forkJoin(this._profileService.getUser(), this._profileService.getFollowers()).subscribe(function (res) {
            _this.profile = res[0];
            _this.followers = res[1];
        }, null, function () { return _this.isLoading = false; });
        // var observable = Observable.forkJoin(this.profile, this.followers);
        // console.log(observable);
    };
    ProfileComponent = __decorate([
        core_1.Component({
            selector: 'profile',
            template: "\n        <div *ngIf=\"isLoading\"><i class=\"fa fa-spinner fa-spin fa-3x\"></i></div>\n        <div class=\"col-sm-5\">\n            <h1>@{{ profile.login }}</h1>\n            <div>\n                <img class=\"avatar\" src=\"{{ profile.avatar_url }}\" alt=\"{{ profile.login }}\">\n            </div>\n            <h4>Followers: {{ profile.followers }}</h4>\n            <div *ngFor=\"let follower of followers\">\n                <followers login=\"{{ follower.login }}\" url=\"{{ follower.avatar_url }}\"></followers>\n            </div>\n        </div>\n    ",
            directives: [followers_component_1.FollowersComponent],
            providers: [profile_service_1.ProfileService, http_1.HTTP_PROVIDERS],
            styles: ["\n        .avatar {\n            width: 100px;\n            height: 100px;\n            border-radius: 100%;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [profile_service_1.ProfileService])
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=profile.component.js.map