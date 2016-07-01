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
var common_1 = require('@angular/common');
var customValidators_1 = require('./customValidators');
var PasswordChangeComponent = (function () {
    function PasswordChangeComponent(fb) {
        this.form = fb.group({
            current: ['', common_1.Validators.compose([
                    common_1.Validators.required,
                    customValidators_1.CustomValidators.minimumLength
                ])],
            new: ['', common_1.Validators.compose([
                    common_1.Validators.required,
                    customValidators_1.CustomValidators.minimumLength
                ])],
            confirm: ['', common_1.Validators.required]
        }, { validator: customValidators_1.CustomValidators.passwordMatch });
    }
    PasswordChangeComponent.prototype.submit = function () {
        console.log(this.form);
        var oldPassword = this.form.find('current');
        if (oldPassword.value != '12345')
            oldPassword.setErrors({
                validOldPassword: true
            });
        if (this.form.valid)
            alert('Password successfully changed');
    };
    PasswordChangeComponent = __decorate([
        core_1.Component({
            selector: 'password-change',
            templateUrl: 'app/password-change.component.html'
        }), 
        __metadata('design:paramtypes', [common_1.FormBuilder])
    ], PasswordChangeComponent);
    return PasswordChangeComponent;
}());
exports.PasswordChangeComponent = PasswordChangeComponent;
//# sourceMappingURL=password-change.component.js.map