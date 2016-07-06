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
// import {LikeComponent} from './like.component';
var TweetComponent = (function () {
    function TweetComponent() {
    }
    TweetComponent.prototype.onLikeChange = function ($event) {
        console.log($event);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], TweetComponent.prototype, "tweet", void 0);
    TweetComponent = __decorate([
        core_1.Component({
            selector: 'tweet',
            template: "\n        <div class=\"media col-sm-10\">\n            <div class=\"media-left\">\n                <a href=\"#\">\n                    <img class=\"media-object\" src=\"{{ tweet.photoUrl }}\" alt=\"{{ tweet.photoAlt }}\">\n                </a>\n            </div>\n            <div class=\"media-body\">\n                <h4 class=\"media-heading\">\n                    {{ tweet.headingTitle }} \n                    <span class=\"handle\">{{ tweet.twitterId }}</span>\n                </h4>\n                <p>{{ tweet.tweet }}</p>\n                <div>\n                    // <like\n                    //     [totalLikes]=\"tweet.totalLikes\" \n                    //     [liked]=\"tweet.liked\"\n                    //     (change)=\"onLikeChange($event)\"></like>\n                </div>\n            </div>\n        </div>\n    ",
            // directives: [LikeComponent],
            styles: ["\n        .media {\n            margin-bottom: 20px;\n        }\n        .media-object {\n            border-radius: 5px;\n        }\n        .handle {\n            color: #ccc;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], TweetComponent);
    return TweetComponent;
}());
exports.TweetComponent = TweetComponent;
//# sourceMappingURL=tweet.component.js.map