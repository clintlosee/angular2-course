import {Component} from '@angular/core';
import {ControlGroup, Control, FormBuilder, Validators} from '@angular/common';
import {CustomValidators} from './customValidators';

@Component({
    selector: 'password-change',
    templateUrl: 'app/password-change.component.html'
})

export class PasswordChangeComponent {
    form: ControlGroup;

    constructor(fb: FormBuilder) {
        this.form = fb.group({
            current: ['', Validators.compose([
                Validators.required,
                CustomValidators.minimumLength
            ])],
            new: ['', Validators.compose([
                Validators.required,
                CustomValidators.minimumLength
            ])],
            confirm: ['', Validators.required] 
        }, { validator: CustomValidators.passwordMatch});
    }


    submit() {
        console.log(this.form);

        var oldPassword = this.form.find('current');
        if (oldPassword.value != '12345')
            oldPassword.setErrors({
                validOldPassword: true
            });
        
        if (this.form.valid)
            alert('Password successfully changed');
    }
}