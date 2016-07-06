import {Component} from '@angular/core';
import {ProfileComponent} from './profile.component';

@Component({
    selector: 'my-app',
    template: `
        <profile></profile>
    `,
    directives: [ProfileComponent]
})
export class AppComponent { }