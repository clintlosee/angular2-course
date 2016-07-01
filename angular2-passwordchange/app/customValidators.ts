import {Control, ControlGroup} from '@angular/common';

export class CustomValidators {
    static minimumLength(control: Control) {
        const minLength = 5;

        if (control.value == '')
            return null;

        if (control.value.length < minLength)
            return { minimumLength: true, length: minLength };

        return null;
    }

    static passwordMatch(group: ControlGroup) {
        var newPassword = group.find('new').value;
        var confirmPassword = group.find('confirm').value;

        if (newPassword == '' || confirmPassword == '')
            return null;

        if (newPassword != confirmPassword)
            return { passwordMatch: true };

        return null;
    }
}