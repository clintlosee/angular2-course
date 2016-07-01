import {Component} from '@angular/core';
import {PasswordChangeComponent} from './password-change.component';

@Component({
    selector: 'my-app',
    template: `
        <password-change></password-change>
    `,
    directives: [PasswordChangeComponent]
})
export class AppComponent { }