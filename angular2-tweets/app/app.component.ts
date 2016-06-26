import {Component} from '@angular/core';
import {TweetComponent} from './tweet.component';

@Component({
    selector: 'my-app',
    template: `
        <h1>Tweets</h1>
        <tweet></tweet>
    `,
    directives: [TweetComponent]
})
export class AppComponent { }