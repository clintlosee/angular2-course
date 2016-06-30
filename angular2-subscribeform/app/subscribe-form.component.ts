import {Component} from '@angular/core';

@Component({
    selector: 'subscribe-form',
    templateUrl: 'app/subscribe-form.component.html'
})

export class SubscribeFormComponent {
    onSubmit(form) {
        console.log(form);
    }
}