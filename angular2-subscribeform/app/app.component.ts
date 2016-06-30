import {Component} from '@angular/core';
import {SubscribeFormComponent} from './subscribe-form.component';

@Component({
    selector: 'my-app',
    template: `
        <subscribe-form></subscribe-form>
    `,
    directives: [SubscribeFormComponent]
})
export class AppComponent { }