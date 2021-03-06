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
var FollowersComponent = (function () {
    function FollowersComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], FollowersComponent.prototype, "followerCount", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], FollowersComponent.prototype, "login", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], FollowersComponent.prototype, "url", void 0);
    FollowersComponent = __decorate([
        core_1.Component({
            selector: 'followers',
            template: "\n        <div class=\"media col-sm-12\">\n            <div class=\"media-left\">\n                <a href=\"#\">\n                    <img class=\"media-object\" src=\"{{ url }}\" alt=\"{{ login }}\">\n                </a>\n            </div>\n            <div class=\"media-body\">\n                <h4 class=\"media-heading\">\n                    {{ login }}\n                </h4>\n            </div>\n        </div>\n    ",
            styles: ["\n        .media-object {\n            width: 100px;\n            height: 100px;\n            border-radius: 100%;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], FollowersComponent);
    return FollowersComponent;
}());
exports.FollowersComponent = FollowersComponent;
//# sourceMappingURL=followers.component.js.map