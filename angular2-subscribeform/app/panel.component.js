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
var PanelComponent = (function () {
    function PanelComponent() {
        this.panelShow = false;
    }
    PanelComponent.prototype.onClick = function () {
        this.panelShow = !this.panelShow;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], PanelComponent.prototype, "title", void 0);
    PanelComponent = __decorate([
        core_1.Component({
            selector: 'panel',
            template: "\n        <div class=\"panel panel-default\">\n            <div class=\"panel-heading\">\n                <h3 class=\"panel-title\"\n                    (click)=\"onClick()\">\n                    {{ title }}\n                <i class=\"glyphicon pull-right\"\n                    [ngClass]=\"{\n                        'glyphicon-chevron-down': !panelShow,\n                        'glyphicon-chevron-up': panelShow\n                    }\"></i>\n                </h3>\n            </div>\n            <div class=\"panel-body\" *ngIf=\"panelShow\">\n                <ng-content></ng-content>\n            </div>\n        </div>\n    ",
            styles: ["\n        .panel {\n            margin: 0;\n            border-radius: 0;\n        }\n        .panel-heading {\n            cursor: pointer;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], PanelComponent);
    return PanelComponent;
}());
exports.PanelComponent = PanelComponent;
//# sourceMappingURL=panel.component.js.map