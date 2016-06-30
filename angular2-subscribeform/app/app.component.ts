import {Component} from '@angular/core';
import {PanelComponent} from './panel.component';

@Component({
    selector: 'my-app',
    template: `
        <panel title="Panel Title">
            Panel content goes here
        </panel>
        <panel title="Panel Title 2">
            Panel 2 content goes here
        </panel>
    `,
    directives: [PanelComponent]
})
export class AppComponent { }