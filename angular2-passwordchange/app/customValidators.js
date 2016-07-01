"use strict";
var CustomValidators = (function () {
    function CustomValidators() {
    }
    CustomValidators.minimumLength = function (control) {
        var minLength = 5;
        if (control.value == '')
            return null;
        if (control.value.length < minLength)
            return { minimumLength: true, length: minLength };
        return null;
    };
    CustomValidators.passwordMatch = function (group) {
        var newPassword = group.find('new').value;
        var confirmPassword = group.find('confirm').value;
        if (newPassword == '' || confirmPassword == '')
            return null;
        if (newPassword != confirmPassword)
            return { passwordMatch: true };
        return null;
    };
    return CustomValidators;
}());
exports.CustomValidators = CustomValidators;
//# sourceMappingURL=customValidators.js.map